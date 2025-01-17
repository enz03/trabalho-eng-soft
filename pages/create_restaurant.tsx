import Create_restaurant from "../src/app/_components/create_restaurant/create_restaurant";
import Navbar from "../src/app/_components/navbar/navbar";
import Footer from "../src/app/_components/footer/footer";

export default function CadastroPage() {
  return (
    <div>
      <Navbar />
      <Create_restaurant />
      <Footer />
    </div>
  );
}