import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className={styles.main}>
            <h1>Nguyễn Anh Tuấn</h1>
            <p>Software developer and game designer</p>
            <i>
                "Give a man a game and he will have fun for a day.
                Teach a man to make game and he will never have fun again."
            </i>
            <p>Author: someone on the internet</p>
            <Link href='/info'><button className={styles.button}>Thông tin về tôi</button></Link>
        </div>
        </div>
    );
}