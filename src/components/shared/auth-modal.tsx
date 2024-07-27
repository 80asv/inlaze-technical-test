import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeftCircle, Xmark } from 'iconoir-react';
import styles from '@/src/styles/shared/AuthModal.module.css';
import Image from 'next/image';
import LoginTab from '../auth/auth-modal/login-tab';
import { useState } from 'react';
import { AuthType } from '@/src/types/auth.types';

export default function AuthModal({ isOpenModal, setOpenModal }) {
  const [authType, setAuthType] = useState<AuthType>({ type: 'register', message: null });
  return (
    <Dialog.Root open={isOpenModal} onOpenChange={setOpenModal}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <div className={styles.leftPanel}>
            <header className={styles.modalHeader}>
              <button onClick={() => setOpenModal(false)}>
                <ArrowLeftCircle />
                Back
              </button>
            </header>
            <LoginTab
              authType={authType}
              setAuthType={setAuthType}
            />
          </div>
          <div className={styles.rightPanel}>
            {authType.type === 'register' ? (
              <>
                <h3>Welcome to Inlaze Movies!</h3>
                <p>🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!</p>
              </>
            ) : (
              <>
                <h3>Welcome back to Inlaze Movies!</h3>
                <p>🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!</p>
              </>
            )}

            <Image className={styles.rightPanelImage} src="/images/person.png" alt="Person" width={1000} height={1000} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}