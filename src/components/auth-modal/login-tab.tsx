import styles from '@/src/styles/shared/AuthModal.module.css';

export default function LoginTab({
  authType,
  setAuthType
}) {
  const handleToggle = (type: string) => {
    setAuthType(type);
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
      <div className={styles.form}>
        <h4>
          {authType === 'login' 
            ? 'We love having you back!' 
            : 'Welcome! We\'re excited to have you join us'}
        </h4>
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button style={{
          backgroundColor: '#f0b90d',
          color: '#ffffff',
          padding: '10px',
          borderRadius: '5px',
        }}>
          {authType === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </div>
    </div>
  )
}