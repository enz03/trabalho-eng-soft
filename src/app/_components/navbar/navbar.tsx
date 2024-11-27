'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <main className={styles.main}>
                <div className={styles.content}>
                    <Link href="./page.tsx" className={styles.logo}> <Image src="/favicon.ico" alt="logo" width={115} height={50}/></Link>
                    <span>
                        <Link href="/Login" className={styles.linkLog}>Entrar</Link>
                        <Link href="/contato" className={styles.linkCont}>Contato</Link>
                        <Link href="/Restaurantes" className={styles.linkRest}>Restaurantes</Link>
                    </span>
                </div>
                <div className={styles.divider}></div>
        </main>
    );
}