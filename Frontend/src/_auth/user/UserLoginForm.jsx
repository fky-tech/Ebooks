import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserLoginForm = () => {
    const [uName, setUName] = useState("");
    const [pwd, setPwd] = useState("");

    // const handleChange = (e) => {
    //     const uNameValue = e.target.value;
    //     setUName(uNameValue);

    //     const pwdValue = e.target.value;
    //     setPwd(pwdValue);
    // }

     const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const loginRes = await axios.post('http://localhost:5000/api/userLogin', {
                userName: uName,
                password: pwd,
            });
            console.log(loginRes.data);
            // if (!loginRes)
            //     console.log(loginRes)
        } catch (error) {
            console.log(error.response.data);
            console.log("Error in fetching the response", error);
            alert("User not found");
            setUName("");
            setPwd("")
        }
    }
    return (
        <section className="text-black min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Sign in</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="username">
                            User Name
                        </label>
                        <input
                            type="text"
                            value={uName}
                            onChange={(e) => {setUName(e.target.value)}}
                            id="username"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            value={pwd}
                            onChange={(e) => {setPwd(e.target.value)}}
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-gray-700 text-white p-3 rounded font-medium"
                    >
                    Login
                    </button>
                </form>
                <p className="text-center mt-4 text-sm">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                    Sign up now
                    </a>
                </p>
            </div>
        </section>
    )
}

export default UserLoginForm
