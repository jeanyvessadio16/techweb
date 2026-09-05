import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jean Yves SADIO - Portfolio",
  description: "Portfolio de Jean Yves SADIO",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} min-h-screen antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900`}>
        <HeaderNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
