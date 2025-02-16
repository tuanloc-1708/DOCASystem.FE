import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "DOCA",
  description: "Generated by DOCA",
  icons: {
    icon: "/icons/doca-icon.svg",
    shortcut: "/icons/doca-icon.svg",
    apple: "/icons/doca-icon.svg",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <div className="container w-[1296px] mx-auto mt-3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
