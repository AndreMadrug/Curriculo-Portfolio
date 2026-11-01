import styles from "./Timeline.module.css";

export default function Timeline({ itens }) {
  return (
    <ol className={styles.timeline}>
      {itens.map((i) => (
        <li key={i.titulo + i.periodo} className={styles.item}>
          <span className={styles.periodo}>{i.periodo}</span>
          <h3>{i.titulo}</h3>
          <p className={styles.local}>{i.local}</p>
          <p>{i.descricao}</p>
        </li>
      ))}
    </ol>
  );
}
