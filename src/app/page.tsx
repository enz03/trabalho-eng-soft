import Login from "./_components/login/login";
import Navbar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";
import Cadastro from "./_components/cadastro/cadastro";
import { Contato } from "./_components/contato/contato";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Contato />
      <Footer />
    </div>
  );

}
