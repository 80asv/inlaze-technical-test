import styles from "@/src/styles/Header.module.css";

export default function LoginButton({ setOpenModal }){
  return(
    <button onClick={() => setOpenModal(true)} className={styles.loginButton}>
      Login
    </button>
  )
}