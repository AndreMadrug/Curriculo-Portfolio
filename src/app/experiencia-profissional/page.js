import Timeline from "@/components/Timeline/Timeline";
import { profissional } from "@/data/curriculo";

export const metadata = { title: "Experiência Profissional" };

export default function Profissional() {
  return (
    <>
      <h1 className="pageTitle">Experiência Profissional</h1>
      <p className="pageSubtitle">Onde já atuei e o que aprendi.</p>
      <Timeline itens={profissional} />
    </>
  );
}
