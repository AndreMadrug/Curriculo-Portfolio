import Card from "@/components/Card/Card";
import { perfil } from "@/data/curriculo";
import styles from "./projetos.module.css";

export const metadata = { title: "Projetos" };

async function getRepos() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${perfil.github}/repos?sort=updated&per_page=30`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((r) => !r.fork).slice(0, 9);
  } catch {
    return [];
  }
}

export default async function Projetos() {
  const repos = await getRepos();
  return (
    <>
      <h1 className="pageTitle">Projetos Desenvolvidos</h1>
      <p className="pageSubtitle">
        Carregados automaticamente da API do GitHub.
      </p>
      {repos.length === 0 && (
        <p>Não foi possível carregar os repositórios agora.</p>
      )}
      <div className={styles.grid}>
        {repos.map((r) => (
          <a key={r.id} href={r.html_url} target="_blank">
            <Card>
              <h3>{r.name}</h3>
              <p className={styles.desc}>{r.description || "Sem descrição."}</p>
              <div className={styles.meta}>
                {r.language && <span className={styles.tag}>{r.language}</span>}
                <span>★ {r.stargazers_count}</span>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}
