'use client';
import styles from './contato.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function Contato() {
    return (
        <main>
            <div className={styles.title}>
                <h1 className={styles.h1}>Fale conosco!</h1>
            </div>
            <div className={styles.nomes}>
                <span className={styles.linha1}>
                    <div className={styles.pessoa1}>
                        <Link href="" className={styles.logo}> <Image src="/favicon.ico" alt="logo" width={20} height={20}/></Link>
                        <h2 className={styles.nome1}>Nicole Ferreira</h2>
                        <p className={styles.matricula1}>221020858@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa2}>
                        <Link href="src/app/page" className={styles.logo}> <Image src="/favicon.ico" alt="logo" width={20} height={20}/></Link>
                        <h2 className={styles.nome2}>Nicole Ferreira</h2>
                        <p className={styles.matricula2}>221020858@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa3}>
                        <Link href="src/app/page" className={styles.logo}> <Image src="/favicon.ico" alt="logo" width={20} height={20}/></Link>
                        <h2 className={styles.nome3}>Nicole Ferreira</h2>
                        <p className={styles.matricula3}>221020858@aluno.unb.br</p>
                    </div>
                </span>
                <span className={styles.linha2}>
                    <div className={styles.pessoa4}>
                        <Link href="src/app/page" className={styles.logo}> <Image src="/favicon.ico" alt="logo" width={20} height={20}/></Link>
                        <h2 className={styles.nome4}>Nicole Ferreira</h2>
                        <p className={styles.matricula4}>221020858@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa5}>
                        <Link href="src/app/page" className={styles.logo}> <Image src="/favicon.ico" alt="logo" width={20} height={20}/></Link>
                        <h2 className={styles.nome5}>Nicole Ferreira</h2>
                        <p className={styles.matricula5}>221020858@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa6}>
                        <Link href="src/app/page" className={styles.logo}> <Image src="/favicon.ico" alt="logo" width={20} height={20}/></Link>
                        <h2 className={styles.nome6}>Nicole Ferreira</h2>
                        <p className={styles.matricula6}>221020858@aluno.unb.br</p>
                    </div>
                </span>
            </div>
        </main>
    );
}