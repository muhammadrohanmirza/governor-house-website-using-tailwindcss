import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:["300","400","700","900"],
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse",
  icons:{
    icon:{ url:"/logo.png", type:"image/png" }
  },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
      className={roboto.className}>
        <Header/>
        <div className="mt-5 mb-5">{children}</div>
        <Footer/>
        </body>
    </html>
  );
}
