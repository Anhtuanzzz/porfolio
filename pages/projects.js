import Head from 'next/head'
import Header from "./header";
import styles from '../styles/Home.module.css';

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className={styles.main}>
                <h1>Các dự án đã thực hiện</h1>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>2020</h2>
                        <p>COVID-19 Tracker</p>
                        <p>Netflix Copy</p>
                    </div>
                    <div className={styles.card}>
                    <h2>2021</h2>
                    <p>FireNancy</p>
                    <p>Some Unity Games</p>
                    </div>
                </div>
            </div>
        </div>
    );
}