import styles from "@/src/styles/Header.module.css";

interface LoginButtonProps {
  setOpenModal: (value: boolean) => void;
}

export default function LoginButton({ setOpenModal }: LoginButtonProps){
  return(
    <button onClick={() => setOpenModal(true)} className={styles.loginButton}>
      Login
    </button>
  )
}