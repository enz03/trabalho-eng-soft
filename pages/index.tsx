import Link from 'next/link';
import Navbar from "../src/app/_components/navbar/navbar";
import Footer from "../src/app/_components/footer/footer";
import { Contato } from "../src/app/_components/contato/contato";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Contato />
      <Footer />
    </div>
  );
}