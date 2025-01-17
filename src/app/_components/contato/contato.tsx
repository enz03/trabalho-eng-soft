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
                        <Link href="src/app/page/imagens" className={styles.logo}> <Image src="/nicole.jpg" alt="nicole" width={150} height={150}/></Link>
                        <h2 className={styles.nome1}>Nicole Ferreira</h2>
                        <p className={styles.matricula1}>221030858@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa2}>
                        <Link href="src/app/page/imagens" className={styles.logo}> <Image src="/luis.jpeg" alt="luis" width={150} height={150}/></Link>
                        <h2 className={styles.nome2}>Luís Cavalcanti</h2>
                        <p className={styles.matricula2}>231003415@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa3}>
                        <Link href="src/app/page/imagens" className={styles.logo}> <Image src="/enzo.jpeg" alt="enzo" width={150} height={150}/></Link>
                        <h2 className={styles.nome3}>Enzo Zanetti</h2>
                        <p className={styles.matricula3}>211026495@aluno.unb.br</p>
                    </div>
                </span>
                <span className={styles.linha2}>
                    <div className={styles.pessoa4}>
                        <Link href="src/app/page/imagens" className={styles.logo}> <Image src="/lucas.jpeg" alt="lucas" width={150} height={150}/></Link>
                        <h2 className={styles.nome4}>Lucas Correa</h2>
                        <p className={styles.matricula4}>211038262@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa5}>
                        <Link href="src/app/page/imagens" className={styles.logo}> <Image src="/joao.jpeg" alt="joao" width={150} height={200}/></Link>
                        <h2 className={styles.nome5}>João Ribeiro</h2>
                        <p className={styles.matricula5}>222001322@aluno.unb.br</p>
                    </div>
                    <div className={styles.pessoa6}>
                        <Link href="src/app/page/imagens" className={styles.logo}> <Image src="/italo.jpeg" alt="italo" width={150} height={150}/></Link>
                        <h2 className={styles.nome6}>Italo Braga</h2>
                        <p className={styles.matricula6}>221020922@aluno.unb.br</p>
                    </div>
                </span>
            </div>
        </main>
    );
}