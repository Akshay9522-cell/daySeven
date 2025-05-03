'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { sendEmail } from '../../actions/sendEmail';
import { useActionState } from 'react';
import adminLog from '../../actions/adminLog';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';

const initialState = {
  success: false,
  error: '',
};

export default function Page() {
  const [state, formAction] = useActionState(adminLog, initialState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [readyToLogin, setReadyToLogin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (state.success && state.admin?.status === 'approved') {
      localStorage.setItem("adminemail", state.admin.email);
      localStorage.setItem("adminname", state.admin.name);
      localStorage.setItem("id", state.admin.id);
      router.push('/admin/AdminDashboard');
      toast.success('Login Successfully');
    }
  }, [state.success, router]);

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const checkEmailVerified = () => {
    const verifiedEmails = JSON.parse(localStorage.getItem('verified_emails') || '[]');
    if (verifiedEmails.includes(email)) {
      setEmailVerified(true);
    } else {
      setEmailVerified(false);
    } 
  };

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    checkEmailVerified();

    if (emailVerified) {
    
      setReadyToLogin(true);
      return;
    }

    const myOtp = generateOtp();
    setOtp(myOtp);

    const formData = new FormData();
    formData.append('name', email.split('@')[0]);
    formData.append('email', email);
    formData.append('message', `Your OTP for Admin Login is: ${myOtp}`);
    formData.append('otp', myOtp);

    const result = await sendEmail(formData);

    if (result.success) {
      setOtpSent(true);
      toast.success("OTP sent to your email!");
    } else {
      toast.error("Failed to send OTP!");
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (enteredOtp === otp) {
      toast.success("OTP Verified Successfully!");
      const verifiedEmails = JSON.parse(localStorage.getItem('verified_emails') || '[]');
      if (!verifiedEmails.includes(email)) {
        verifiedEmails.push(email);
        localStorage.setItem('verified_emails', JSON.stringify(verifiedEmails));
      }
      
      setReadyToLogin(true);
    } else {
      toast.error("Invalid OTP!");
    }
  };


  const handleVerifyEmail = () => {
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
  
    const verifiedEmails = JSON.parse(localStorage.getItem('verified_emails')) || [];
  
    if (verifiedEmails.includes(email)) {
      toast.success("Email already verified! You can login now.");
      setReadyToLogin(true);
    } else {
      toast.error("Email not verified yet. Please verify with OTP.");
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">Admin Login</h1>

          {!readyToLogin ? (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded"
              />


<button
  onClick={handleVerifyEmail}
  className="w-full py-3 bg-purple-500 text-white rounded hover:bg-purple-600"
>
  Verify Email
</button>
              <button
                onClick={handleSendOtp}
                className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {emailVerified ? 'Proceed to Login' : 'Send OTP'}
              </button>

              {!emailVerified && otpSent && (
                <form onSubmit={handleVerifyOtp} className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    className="w-full p-3 border rounded"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Verify OTP
                  </button>
                </form>
              )}
            </>
          ) : (
            <form action={formAction} className="space-y-4">
              <input
                type="email"
                name="email"
                value={email}
                readOnly
                hidden
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded"
                placeholder="Enter Password"
              />
              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Login
              </button>
            </form>
          )}

          <div className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link href="/admin/Sign" className="text-blue-600 hover:underline font-medium">
              Register here
            </Link>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}
