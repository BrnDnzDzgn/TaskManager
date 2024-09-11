import { useState } from "react";
import { SignupHook } from "../../../hooks/signup-hook";


const SignupForm = () => {
    const { mutate, data, isError, isSuccess } = SignupHook();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const makeSignupRequest = async (event) => {
        event.preventDefault();
        await mutate({
            first_name: firstName, last_name: lastName, email, password
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
                    <div className="mb-4">
                        <label htmlFor="firstname" className="block text-gray-700 mb-2">First Name:</label>
                        <div className="flex items-center w-full">
                            <input 
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                type="text" 
                                id="firstname" 
                                name="firstname" 
                                required 
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastname" className="block text-gray-700 mb-2">Last Name:</label>
                        <div className="flex items-center w-full">
                            <input 
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                type="text" 
                                id="lastname" 
                                name="lastname" 
                                required 
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                        <div className="flex items-center w-full">
                            <input
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                        <div className="flex items-center w-full">
                            <input 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                type="password" 
                                id="password" 
                                name="password" 
                                required 
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div>
                        <button 
                            onClick={makeSignupRequest} 
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Signup
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-700">
                            Don't have an account?{" "}
                            <a 
                                href="/login" 
                                className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300"
                            >
                                Login!
                            </a>
                        </p>
                    </div>
            </div>
        </div>
    );
}

export default SignupForm;