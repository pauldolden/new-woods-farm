import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Head } from "./Head";
import { Footer } from "./Footer";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
