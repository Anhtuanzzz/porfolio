import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/home">
            <a>Trang chủ</a>
            </Link>
            <Link href="/info">
            <a>Thông tin</a>
            </Link>
            <Link href="/projects">
            <a>Dự án</a>
            </Link>
        </header>
    );
}