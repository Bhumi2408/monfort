import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import EnquiryPopup from "@/components/EnquiryPopup";
import { SITE_URL } from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Monfort",
  description: "",
  icons: {
    icon: "/logo.jpeg",
  },
  verification: {
    google: "iQ9cLBSUwN-qEODV5_ll442keLBwCgaxlbj1sCmTY-o",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatButton />
        <EnquiryPopup />
      </body>
    </html>
  );
}
