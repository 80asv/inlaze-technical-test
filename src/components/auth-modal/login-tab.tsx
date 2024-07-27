import { login, register } from '@/src/actions/auth';
import styles from '@/src/styles/shared/AuthModal.module.css';
import { useState } from 'react';

export default function LoginTab({
  authType,
  setAuthType
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToggle = (type: string) => {
    setAuthType(type);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    authType === 'login' ? loginAccount() : signUp();
  }

  const loginAccount = () => {
    login(email, password).then((data) => {
      console.log(data);
    }).finally(() => {
      setLoading(false);
    });
  }

  const signUp = () => {
    register(email, password).then((data) => {
      console.log(data);
    }).finally(() => {
      setLoading(false);
    });
  }

  return(
    <div>
      <div className={styles.toggles}>
        <button 
          style={{
            backgroundColor: authType === 'register' ? '#f0b90d' : '#808080',
            color: authType === 'register' ? '#ffffff' : '#000000'
          }}
          onClick={() => handleToggle('register')}
        >
          Sign Up
        </button>
        <button 
          style={{
            backgroundColor: authType === 'login' ? '#f0b90d' : '#808080',
            color: authType === 'login' ? '#ffffff' : '#000000'
          }}
          onClick={() => handleToggle('login')}
        >
          Login
        </button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4>
          {authType === 'login' 
            ? 'We love having you back!' 
            : 'Welcome! We are excited to have you join us'}
        </h4>
        <input 
          type="email" 
          placeholder='Email' 
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading && (
          <p>Loading...</p>
        )}
        <button type="submit" style={{
          backgroundColor: '#f0b90d',
          color: '#ffffff',
          padding: '10px',
          borderRadius: '5px',
        }}>
          {authType === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}