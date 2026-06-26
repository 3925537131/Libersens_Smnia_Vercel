import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Fab from "@/components/Fab";

export const metadata = {
  title: "Libersens — Desire, engineered.",
  description:
    "Libersens is the first lab to engineer intimacy robotics — an intelligent presence, built mind-first, designed to be wanted.",
  metadataBase: new URL("https://libersens.com"),
  openGraph: {
    title: "Libersens — Desire, engineered.",
    description: "Intimacy robotics, built mind-first.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <Fab />
        </CartProvider>
      </body>
    </html>
  );
}
