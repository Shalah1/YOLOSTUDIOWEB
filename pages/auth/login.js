import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from './layout';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginType, setLoginType] = useState('user'); 
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let loginUrl = 'http://localhost:3000/users/signin';

      if (loginType === 'admin') {
        loginUrl = 'http://localhost:3000/admin/signin';
      }

      const response = await axios.post(loginUrl, { email, password });
      console.log('res: ' + response.data);

      sessionStorage.setItem('email', response.data);
  
      router.push("/auth/dashbaord");
    } 
    
    catch (error) {
      console.log('error22: ' + error.message);
      setError('Invalid login');
    }
  };

  return (
    <Layout>
      <div className="p-4 sm:p-8 md:p-16 lg:p-20">
        <section className="text-gray-900 body-font mx-auto max-w-xl">
          <form onSubmit={handleSubmit}>
            <div className="bg-blue-300 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mx-4 sm:mx-auto w-full mt-10">
              <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-medium title-font mb-6">Sign In</h2>
              <div className="mb-4">
                <select
                  id="login-type"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  value={loginType}
                  onChange={(e) => setLoginType(e.target.value)}
                >
                  <option value="user"></option>
                  <option value="admin">USER</option>
                </select>
              </div>
    
              <div className="mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-500 border-0 py-3 px-8 sm:py-4 sm:px-10 md:py-4 md:px-12 focus:outline-none hover:bg-blue-600 rounded-lg text-lg transition-transform hover:shadow-glow-blue-500"
              >
                Sign In
              </button>
              
              {error && (
                <div>
                  <p className="mt-3 text-xs sm:text-sm text-red-600 dark:text-red-400">
                    <span className="font-medium">{error}</span>
                  </p>
                </div>
                
              )}
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
