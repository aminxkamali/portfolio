'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
const router = useRouter()

const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
    alert("Passwords do not match!")
    return
    }

    const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
    })

    if (res.ok) {
    router.push('/')
    } else {
    const data = await res.json()
    alert(data.message || 'Registration failed')
    }
}

return (
    <form onSubmit={handleSubmit} className="bg-[#0E141E] w-90">
    <div className="flex flex-col items-center mb-6">
    <div className="flex flex-row  items-center mb-6">
        <img src="/eventifyLogo.png" className="w-20 h-20" alt="logo" />
        <span className='text-4xl font-inter'>eventify</span>
    </div>
        <h2 className="text-2xl font-bold mt-4">Sign up</h2>
        <p className="text-sm text-gray-400">Create an account to get started</p>
    </div>

    {['FirstName', 'LastName', 'username', 'email', 'password', 'confirmPassword'].map((field, idx) => (
        <div key={idx} className="mb-4">
        <label className="block text-sm mb-2">{field.replace(/([A-Z])/g, ' $1')}</label>
        <input
            type={field.toLowerCase().includes('password') ? 'password' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
        />
        </div>
    ))}

    <button
        type="submit"
        className="w-full bg-orange-500 mt-2 hover:bg-orange-600  active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
    >
        Sign up
    </button>

    <p className="text-center text-sm text-gray-400 mt-4 mb-4">
        Already have an account? <a className="text-blue-400" href="/">Sign in</a>
    </p>
    </form>
)
}
