import { login, register } from '@/src/actions/auth';
import styles from '@/src/styles/shared/AuthModal.module.css';
import { AuthType } from '@/src/types/auth.types';
import { useEffect, useState } from 'react';

interface LoginTabProps {
  authType: AuthType;
  setAuthType: (type: AuthType) => void;
  closeModal?: () => void;
}

export default function LoginTab({
  authType,
  setAuthType,
  closeModal,
}: LoginTabProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [error])

  const handleToggle = (type: string) => {
    setAuthType({ type, message: null });
  }

  const validateInputs = () => {
    if (!email || !password) {
      setError('Email and password cannot be empty.');
      return false;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return false;
    }
    return true;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) return;
    setLoading(true);
    authType.type === 'login' ? loginAccount() : signUp();
  }

  const loginAccount = () => {
    login(email, password).then((data) => {
      if('statusCode' in data) {
        setError(data.message);
      } else {
        setAuthType({ type: 'login', message: null });
        closeModal?.();
      }
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const signUp = () => {
    register(email, password).then((data) => {
      if('statusCode' in data) {
        setError(data.message);
      } else {
        setAuthType({ type: 'login', message: 'Account created successfully. Please login to continue' });
      }
    }).finally(() => {
      setLoading(false);
    });
  }

  return(
    <div>
      <div className={styles.toggles}>
        <button 
          style={{
            backgroundColor: authType.type === 'login' ? '#f0b90d' : '#808080',
            color: authType.type === 'login' ? '#ffffff' : '#000000'
          }}
          onClick={() => handleToggle('login')}
        >
          Login
        </button>
        <button 
          style={{
            backgroundColor: authType.type === 'register' ? '#f0b90d' : '#808080',
            color: authType.type === 'register' ? '#ffffff' : '#000000'
          }}
          onClick={() => handleToggle('register')}
        >
          Sign Up
        </button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4>
          {authType.type === 'login' 
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
          required
          minLength={4}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p style={{ color: 'red', fontSize: '13px', textAlign: 'center' }}>{error}</p>
        )}
        {authType.message && !loading && (
          <p style={{ color: 'green', fontSize: '13px', textAlign: 'center' }}>{authType.message}</p>
        )}
        {loading && (
          <p>Loading...</p>
        )}
        <button type="submit" style={{
          backgroundColor: '#f0b90d',
          color: '#ffffff',
          padding: '10px',
          borderRadius: '5px',
        }}>
          {authType.type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p style={{ fontSize: '13px', color: 'white', textAlign: 'center', marginTop: '15px' }}>
        {authType.type === 'login' ? (
          <span>Don't have an account? <button onClick={() => handleToggle('register')} style={{ textUnderlineOffset: '1px', color: '#f0b90d' }}>Sign Up</button></span>
        ) : (
          <span>Already have an account? <button onClick={() => handleToggle('login')} style={{ textUnderlineOffset: '1px', color: '#f0b90d' }}>Login</button></span>
        )}
      </p>
    </div>
  )
}