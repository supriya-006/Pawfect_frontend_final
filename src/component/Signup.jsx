import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value // Fixing this part (set value correctly)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Modify the backend URL to match port 4000
      const response = await axios.post('http://localhost:4000/auth/sign/signup', values);

      if (response.status === 201) {
        navigate('/login'); // Redirect to login page after successful signup
      }
    } catch (err) {
      console.log(err); // Handle errors, you can display error messages here if needed
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="./logo.jpg" alt='logo' height={'80px'} width={'80px'} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center ">
          Sign up account
        </h2>

        {/* Form */}
        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          {/* User name Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              UserName
            </label>
            <input
              type="text"
              id="username"
              name="username" // Ensure name attribute is correct
              className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email" // Ensure name attribute is correct
              className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@example.com"
              required
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password" // Ensure name attribute is correct
              className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-center font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Sign up
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
              <Link to='/login'>Login here</Link>
            </a> 
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup
