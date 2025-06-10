import { Centro } from "./components/body/Centro";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>

      <Navbar />
      <main>
        <Centro/>
      </main>

      <Footer />
    </>
        );
}
