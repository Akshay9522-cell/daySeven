import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./reduxComponent/reduxProvider";




import {
  ClerkProvider,
 
} from '@clerk/nextjs'
import { Provider } from "react-redux";
import store from "./redux/store";


import 'bootstrap/dist/css/bootstrap.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

      <ReduxProvider>
        
        {children}
        </ReduxProvider>
      
      
      </body>
    </html>
  </ClerkProvider>
  );
}
