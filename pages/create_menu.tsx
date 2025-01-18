import Create_restaurant from "../src/app/_components/create_menu/create_menu";
import Navbar from "../src/app/_components/navbar/navbar";
import Footer from "../src/app/_components/footer/footer";

export default function CreateRestaurantPage() {
  return (
    <div>
      <Navbar />
      <Create_restaurant />
      <Footer />
    </div>
  );
}