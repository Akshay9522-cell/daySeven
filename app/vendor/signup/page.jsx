'use client'

import React, { useActionState } from 'react'

import  vendoeReg from '../../actions/vendoeReg'

export default function Sign() {

    const[state,formAction]=useActionState(vendoeReg)
  return (
    <div className='m-auto w-50'>
            <form className="m-auto" action={formAction}>
            <div className="flex flex-col mb-3">
              <label htmlFor="name" className="text-gray-600">
                Name <sup>*</sup>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="shadow-lg p-3 border border-gray-300 w-full"
              />
            </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="text-gray-600">
              Email ID <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email ID"
              className="shadow-lg p-3 border border-gray-300 w-full"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="text-gray-600">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="shadow-lg p-3 border border-gray-300 w-full"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="phone" className="text-gray-600">
              Phone Number <sup>*</sup>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number"
              className="shadow-lg p-3 border border-gray-300 w-full"
            />
          </div>

          <div className="btn" style={{ backgroundColor: "#DD2745", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "20px" }}>
           <button type='submit'>save</button>
          </div>
        </form>

    </div>
  )
}
