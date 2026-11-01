import Image from "next/image";
import Link from "next/link";
import { perfil } from "@/data/curriculo";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.texto}>
        <p className={styles.hi}>Olá, eu sou</p>
        <h1 className={styles.name}>{perfil.nome}</h1>
        <h2 className={styles.role}>{perfil.titulo}</h2>
        <p className={styles.resumo}>{perfil.resumo}</p>
        <div className={styles.actions}>
          <Link href="/projetos" className={styles.primary}>Ver projetos</Link>
          <Link href="/sobre" className={styles.secondary}>Sobre mim</Link>
        </div>
        <div className={styles.socials}>
          <a href={`https://github.com/${perfil.github}`} target="_blank">GitHub</a>
        </div>
      </div>
      <Image
        src="/foto.jpg"
        alt={`Foto de ${perfil.nome}`}
        width={320}
        height={320}
        className={styles.foto}
        priority
      />
    </section>
  );
}
