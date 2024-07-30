"use client";

import { useDispatch } from 'react-redux';
import { login } from '@/redux/feature/authSlice'; // Adjust this path according to your actual structure
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './login.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    const state = store.getState();
    if (state.auth.isAuthenticated) {
      router.push('/reviews'); // Redirect to testimonials page after login
    } else {
      setError('Invalid username or password');
    }
  };

  // Function to simulate login
  const handleTestLogin = () => {
    dispatch(login({ username: 'testuser', password: 'testpassword' }));
    const state = store.getState();
    if (state.auth.isAuthenticated) {
      router.push('/reviews'); // Redirect to testimonials page after login
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link href="/reviews/inscription">Sign up</Link></p>
      
      
    </div>
  );
}
