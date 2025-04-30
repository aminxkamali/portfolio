'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
export default function LoginForm() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials', {
    redirect: false,
    email,
    password
    })

    if (res?.error) {
    alert('Login failed')
    } else {
    window.location.href = '/'
    }
}

return (
    <form onSubmit={handleSubmit} className="bg-[#0E141E]   w-90 ">
    <div className="flex flex-col items-center mb-6">
        <div className="flex flex-row  items-center mb-6">
            <img src="/eventifyLogo.png" className="w-20 h-20" alt="logo" />
            <span className='text-4xl font-inter'>eventify</span>
        </div>
        <h2 className="text-2xl font-bold mt-4 mb-1">Log in</h2>
        <p className="text-sm text-gray-400">Welcome back! Please enter your details.</p>
    </div>

    <label className="block text-sm mb-1">Email</label>
    <input
        type="email"
        className="w-full h-11 mb-4 p-2 rounded-lg bg-[#060C16] border border-[#21333F] mt-1 focus:border-white outline-none transition-colors duration-200"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />

    <div className="flex justify-between items-center">
        <label className="block text-sm mb-1">Password</label>
        <a href="#" className="text-xs text-blue-400">Forget password?</a>
    </div>
    <input
    type="password"
    className="w-full h-11 mb-4 p-2 rounded-lg bg-[#060C16] border border-[#21333F] mt-1 focus:border-white outline-none transition-colors duration-200"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />

    <button
    type="submit"
    className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
    >
    Log in
    </button>
    <p className="text-center text-sm text-gray-400 mt-4">
        Don’t have an account? <a className="text-blue-400" href="/signup">Sign up</a>
    </p>
    </form>
)
}
