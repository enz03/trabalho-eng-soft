import Create_review from "../src/app/_components/create_review/create_review";
import Navbar from "../src/app/_components/navbar/navbar";
import Footer from "../src/app/_components/footer/footer";

export default function CreateRestaurantPage() {
  return (
    <div>
      <Navbar />
      <Create_review />
      <Footer />
    </div>
  );
}