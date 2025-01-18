import Create_menu from "../src/app/_components/create_menu/create_menu";
import Navbar from "../src/app/_components/navbar/navbar";
import Footer from "../src/app/_components/footer/footer";

export default function CreateRestaurantPage() {
  return (
    <div>
      <Navbar />
      <Create_menu />
      <Footer />
    </div>
  );
}