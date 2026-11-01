"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia-academica", label: "Acadêmica" },
  { href: "/experiencia-profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>&lt;AM /&gt;</Link>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? styles.active : ""}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
