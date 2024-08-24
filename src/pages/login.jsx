import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from "react-hot-toast"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext';

const LoginForm = ({ isAuthenticated }) => {
  const { user, login } = useAuth();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://e-comm-backend-pkj2.onrender.com/api/user/login", formData, { withCredentials: true })
      console.log(response)
      if (response.data.status === "success" || response.data.success) {
        const token = response.data.user_id;
        login(token);
        navigate('/')

      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.error)
    }
  };


  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">Log in</h2>
        </div>
        <form className="mt-8 space-y-6 px-4 py-6 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none sm:rounded-none relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none sm:rounded-none relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
            <Link to="/signup"
              type="submit"
              className='my-5 text-blue-600 block'
            >
              Don't have account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
