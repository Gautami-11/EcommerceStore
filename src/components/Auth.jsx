import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Auth({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onAuth(auth.currentUser);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleAuth}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Auth;