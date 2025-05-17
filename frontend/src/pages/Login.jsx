import React from 'react'

const Login = () => {
  return (
    <section className='min-h-screen flex items-center mt-16 justify-center bg-gradient-to-tr from-blue-50 to-white px-4 py-12'>
      <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-lg'>
        {/* Heading */}
        <h3 className='text-2xl md:text-3xl font-bold  mb-6 text-gray-800'>Sign Up</h3>

        {/* Input Fields */}
        <div className='space-y-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input
            type='password'
            placeholder='Your Password'
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* Submit Button */}
        <button className='w-full mt-6 btn_dark_rounded hover:bg-zinc-900 text-white font-semibold py-3 rounded-lg transition duration-300'>
          Continue
        </button>

        {/* Login Redirect */}
        <p className='text-sm text-center mt-4 text-gray-600'>
          Already have an account?{' '}
          <span className='text-secondary hover:underline cursor-pointer'>Login</span>
        </p>

        {/* Terms and Conditions */}
        <div className='flex items-start gap-2 mt-6 text-sm text-gray-500'>
          <input type='checkbox' className='mt-1' />
          <p>
            By continuing, I agree to the{' '}
            <span className='text-secondary underline cursor-pointer'>Terms of Use</span> &{' '}
            <span className='text-secondary underline cursor-pointer'>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
