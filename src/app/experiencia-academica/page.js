import Timeline from "@/components/Timeline/Timeline";
import { academica } from "@/data/curriculo";

export const metadata = { title: "Experiência Acadêmica" };

export default function Academica() {
  return (
    <>
      <h1 className="pageTitle">Experiência Acadêmica</h1>
      <p className="pageSubtitle">Minha formação e trajetória na faculdade.</p>
      <Timeline itens={academica} />
    </>
  );
}
