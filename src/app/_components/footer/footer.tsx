'use client';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <main>
            <footer className={styles.main}>
                <p className={styles.texti}>Todos os direitos reservados ©</p>
                <p className={styles.textii}><b>GastroReview</b> - CNPJ: XX.XXX.XXX/XXXX-XX</p>
            </footer> 
        </main>
    );
}