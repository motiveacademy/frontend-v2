import "./globals.css";

import Script from "next/script";
import { Raleway, Lato } from "next/font/google";

import NavbarWrapper from "@/commons/components/navbar/wrapper";
import { AuthContextProvider } from "@/commons/contexts/auth";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; /* eslint-disable import/first */

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight:["100", "300", "400" , "700", "900"]
});

const CLIENTKEY = {
  sandbox: "SB-Mid-client-u5SLokLZ_DWoea8E",
  production: "Mid-client-8F45h7sEmqjiDRQQ",
};

export const metadata = {
  title: "Motive Academy",
  description:
    "Mengembangkan potensi pemuda muslim dalam melakukan pengelolaan dan manajemen organisasi.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${raleway.variable} ${lato.variable}`}>
      <AuthContextProvider>
        <body className="font-raleway">
          <NavbarWrapper />
          {children}
          {/* <Script
            src="https://app.sandbox.midtrans.com/snap/snap.js"
            data-client-key={CLIENTKEY.production}
          /> */}
        </body>
      </AuthContextProvider>
    </html>
  );
}
