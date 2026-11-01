import Card from "@/components/Card/Card";
import { perfil, tecnologias } from "@/data/curriculo";
import styles from "./sobre.module.css";

export const metadata = { title: "Sobre" };

export default function Sobre() {
  return (
    <>
      <h1 className="pageTitle">Sobre</h1>
      <p className="pageSubtitle">{perfil.resumo}</p>
      <h2 className={styles.heading}>Tecnologias e módulos deste site</h2>
      <div className={styles.grid}>
        {tecnologias.map((t) => (
          <Card key={t.nome}>
            <h3>{t.nome}</h3>
            <p className={styles.uso}>{t.uso}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
