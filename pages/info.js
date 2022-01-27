import Head from 'next/head';
import Header from './header';
import styles from '../styles/Home.module.css';

export default function Info() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Info</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className={styles.main}>
                <h1>Nguyễn Anh Tuấn</h1>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>Job:</h2>
                        <p>Frontend Developer</p>
                        <p>Game Designer and Developer</p>
                        <p>A.I. Developer (sometimes)</p>
                        <h2>Education:</h2>
                        <p>National Economics University: Information Technology</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Skills</h2>
                        <p>HTML, JS, CSS</p>
                        <p>Framework and Library: React, Next, Vue</p>
                        <p>C# and Unity</p>
                    </div>
                    <div className={styles.card}>
                        <h2>My specs</h2>
                        <h4>ASUS ZenBook laptop</h4>
                        <p>Intel Core i5</p>
                        <p>8GB RAM</p>
                        <p>512GB SSD</p>
                        <h4>IDEs and Text Editors</h4>
                        <p>Visual Studio Code</p>
                        <p>Visual Studio Community 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}