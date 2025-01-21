import GoogleLoginComponent from '../src/app/_components/login/google';
import Navbar from '../src/app/_components/navbar/navbar';
import Footer from '../src/app/_components/footer/footer';

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <GoogleLoginComponent />
      <Footer />
    </div>
  );
}