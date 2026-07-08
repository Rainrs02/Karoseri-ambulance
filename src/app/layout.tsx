import type { Metadata } from "next";
import { Oswald, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Wasilah Karoseri Ambulance | Spesialis Modifikasi Interior & Eksterior Medis",
  description: "Jasa karoseri modifikasi ambulance profesional dengan presisi teknik tinggi. Melayani kustomisasi ambulance transport, AGD, jenazah, dan kabin alkes standar Kemenkes RI.",
  keywords: "karoseri ambulance, modifikasi ambulance, ambulance indonesia, interior ambulance, tabung oksigen ambulance, stretcher ambulance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${oswald.variable} ${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy font-inter selection:bg-accent-teal selection:text-white">
        {/* Border blueprint dekoratif tipis di sekeliling layar */}
        <div className="fixed inset-0 border border-blueprint pointer-events-none z-50 m-2 pointer-events-none" />
        
        <Navbar />
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
