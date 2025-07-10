import React, { useEffect } from 'react'

const UserRegisterForm = () => {
    // useEffect(() => {
    //     const handleLogin = async () => {
            
    //     }
    // })    

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-sm font-medium mb-2">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            placeholder="Choose a username"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Create a password"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-gray-700 text-white p-3 rounded font-medium"
                    >
                    Register
                    </button>
                </form>
                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                    Login
                    </a>
                </p>
            </div>
        </section>
    )
}

export default UserRegisterForm
