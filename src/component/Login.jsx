import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    // Corrected the setValues to update correctly
    setValues({
      ...values,
      [e.target.name]: e.target.value // Now updating values correctly
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to login
      const response = await axios.post('http://localhost:4000/auth/log/login', values);

      if (response.status === 200 || response.status === 201) {
        // If login is successful, save token to localStorage and navigate to home page
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      }
    } catch (err) {
      // If there is an error (e.g., incorrect credentials), show an alert
      if (err.response && err.response.status === 401) {
        alert('Incorrect email or password. Please try again.');
      } else {
        alert('An error occurred. Please try again later.');
      }
      console.log(err); // Log the error for debugging purposes
    }
  };



  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="./logo.jpg" alt="logo" height="80px" width="80px" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Login to your account
          </h2>

          {/* Form */}
          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email" // Ensure correct name attribute for mapping in state
                className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@example.com"
                required
                onChange={handleChange} // Updating state with the user input
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password" // Ensure correct name attribute for mapping in state
                className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                onChange={handleChange} // Updating state with the user input
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                <Link to="/forget_password">Forgot password?</Link>
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-center font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                <Link to="/Signup">Sign up</Link>
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
