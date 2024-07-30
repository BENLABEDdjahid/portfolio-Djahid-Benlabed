"use client";

import { useDispatch } from 'react-redux';
import { signup } from '@/redux/feature/authSlice'; // Adjust this path according to your actual structure
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './inscription.css';

export default function SignupPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      dispatch(signup({ username, email, password }));
      router.push('/reviews/login'); // Redirect to login page after sign-up
    } else {
      setError('All fields are required');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="icon"><i className="fas fa-user"></i></label>
          <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label className="icon"><i className="fas fa-envelope"></i></label>
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label className="icon"><i className="fas fa-lock"></i></label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <span className="toggle-password"><i className="fas fa-eye"></i></span>
        </div>
        <div className="input-group">
          <label className="icon"><i className="fas fa-lock"></i></label>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <span className="toggle-password"><i className="fas fa-eye"></i></span>
        </div>
        <div className="terms">
          <input type="checkbox" required />
          <label>I read and agree to <a href="#">Terms & Conditions</a></label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="signup-button">CREATE ACCOUNT</button>
      </form>
      <p>Already have an account? <Link href="/reviews/login">Sign in</Link></p>
    </div>
  );
}
