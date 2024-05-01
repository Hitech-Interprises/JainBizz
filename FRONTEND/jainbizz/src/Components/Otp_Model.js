import React, { useState } from 'react'

const Otp_Model = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="max-w-md mx-auto border  mt-2 rounded">
        <form className="shadow-md px-4 py-6">
          <div className="flex justify-center gap-2 mb-6">
            <input className="w-12 h-12 text-center border-2 border-purple-400 rounded-md focus:border-purple-600 hover:border-purple-600 focus:ring-green-600 focus:ring-opacity-50" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
            <input className="w-12 h-12 text-center border-2 border-purple-400 rounded-md focus:border-purple-600 hover:border-purple-600 focus:ring-purple-600 focus:ring-opacity-50" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
            <input className="w-12 h-12 text-center border-2 border-purple-400 rounded-md focus:border-purple-600 hover:border-purple-600 focus:ring-yellow-600 focus:ring-opacity-50" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
            <input className="w-12 h-12 text-center border-2 border-purple-400 rounded-md focus:border-purple-600 hover:border-purple-600 focus:ring-red-600 focus:ring-opacity-50" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Verify
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800 ml-4" href="#">
              Resend OTP
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Otp_Model
