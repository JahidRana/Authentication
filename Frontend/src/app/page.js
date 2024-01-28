import styles from './Home.module.css'; 

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to the Home Page</h1>
      <p>This is a simple home interface built with Next.js.</p>
    </div>
  );
}
