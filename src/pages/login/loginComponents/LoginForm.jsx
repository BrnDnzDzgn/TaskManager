const LoginForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                        <input 
                            type="password"
                            id="password" 
                            name="password" 
                            required 
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-700">
                            Don't have an account?{" "}
                            <a 
                                href="/signup" 
                                className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300"
                            >
                                Signup!
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;