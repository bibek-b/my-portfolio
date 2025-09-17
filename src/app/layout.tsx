import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PreLoader from "@/components/Preloader";
import { Oswald } from "next/font/google";
import f from "../../public/favicon.ico";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Bibek Gadel | Full Stack & React Developer",
  description:
    "Portfolio of Bibek (Bibek BK / Bibek Bishwokarma / Bibek GD). Full Stack Developer, React & React Native Developer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className}`}>
        <PreLoader>
          <Navbar />
          <main className="md:px-20">{children}</main>
          <Footer />
        </PreLoader>
      </body>
    </html>
  );
}
