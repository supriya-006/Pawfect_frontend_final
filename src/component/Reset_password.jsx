import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Reset_password = () => {
   const [values, setValues] = useState({
      email: ''
    });
  
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
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
        const response = await axios.post('http://localhost:4000/auth/forget_password', values);
        
  
        if (response.status === 200) {
  
          setMessage('A password reset link has been sent to your email.');
          setError('');
          setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('No account found with this email.');
          setMessage('');
        } else {
          setError('An error occurred. Please try again.');
          setMessage('');
        }
      }
    };
  
    return (
      <>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img src="./logo.jpg" alt="logo" height="80px" width="80px" />
              Adoptation
            </a>
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h2>
  
              {/* Success or Error Message */}
              {message && <div className="text-green-500 mb-2">{message}</div>}
              {error && <div className="text-red-500 mb-2">{error}</div>}
  
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
  
                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      aria-describedby="newsletter"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="newsletter"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{' '}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-center font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  Reset Password
                </button>
              </form>
  
              {/* Back to Login Link */}
              <div className="mt-4 text-center">
                <Link to="/login" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  


export default Reset_password