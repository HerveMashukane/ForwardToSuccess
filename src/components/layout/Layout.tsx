import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "../ui/ScrollToTop";
import WhatsAppFloat from "../ui/WhatsAppFloat";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-gray-800">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}
