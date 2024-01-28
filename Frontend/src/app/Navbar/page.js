// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // If you're using CSS modules

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" passHref className={styles.navspace}>
                <span className={styles.navitem}>Home</span>
            </Link>
            <Link href="/about" passHref className={styles.navspace}>
                <span className={styles.navitem}>About</span>
            </Link>
            <Link href="/contact" passHref className={styles.navspace}>
                <span className={styles.navitem}>Contact</span>
            </Link>
            <Link href="/register" passHref className={styles.navspace}>
                <span className={styles.navitem}>Register</span>
            </Link>
            <Link href="/login" passHref className={styles.navspace}>
                <span className={styles.navitem}>Login</span>
            </Link>
            <Link href="/profile" passHref className={styles.navspace}>
                <span className={styles.navitem}>Profile</span>
            </Link>
        </nav>
    );
}

export default Navbar;
