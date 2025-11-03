import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "./auto-reset-on-scroll";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
