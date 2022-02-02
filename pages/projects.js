import Link from 'next/link';
import Head from 'next/head';
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
                <h1>2020</h1>
                <div className={styles.grid}>
                    <div className={styles.project}>
                        <Link href='https://github.com/Anhtuanzzz/covid19-tracker'>
                            <a target='_blank'>
                                <h2>COIVD-19 Tracker</h2>
                                <p>Trang web thống kê số ca COVID-19 tại Việt Nam</p>
                                <h4>Công nghệ: React</h4>
                            </a>
                        </Link>
                    </div>
                </div>
                <h1>2021</h1>
                <div className={styles.grid}>
                    <div className={styles.project}>
                        <Link href='https://github.com/Anhtuanzzz/firenancy'>
                            <a target='_blank'>
                                <h2>FireNancy</h2>
                                <p>Trang web tài chính</p>
                                <h4>Công nghệ: React</h4>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.project}>
                        <Link href='/'>
                            <a target='_blank'>
                                <h2>2D Game</h2>
                                <p>Tựa game 2D nho nhỏ</p>
                                <h4>Engine: Unity</h4>
                            </a>
                        </Link>
                    </div>
                </div>
                <h1>2022</h1>
                <div className={styles.grid}>
                    <div className={styles.project}>
                        <Link href='https://github.com/Anhtuanzzz/firenancy'>
                            <a target='_blank'>
                                <h2>THPTQG Helper</h2>
                                <p>Trang web tính điểm thi THPT</p>
                                <h4>Công nghệ: React</h4>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.project}>
                        <Link href='/'>
                            <a target='_blank'>
                                <h2>2D Game</h2>
                                <p>Lại là một tựa game 2D nho nhỏ</p>
                                <h4>Engine: Unity</h4>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}