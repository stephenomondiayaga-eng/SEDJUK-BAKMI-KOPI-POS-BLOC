import Navbar from "@/components/Navbar";
import MenuPreview from "@/components/MenuPreview";
import Footer from "@/components/Footer";
import { site } from "@/lib/config";

export const metadata = {
  title: "Menu | Sedjuk Bakmi & Kopi Pos Bloc",
  description: "Explore the full menu of bakmi, rice dishes, snacks, and coffee at Sedjuk Bakmi & Kopi Pos Bloc.",
  alternates: { canonical: `${site.url}/menu` },
};

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-28">
        <MenuPreview full />
      </div>
      <Footer />
    </main>
  );
}
