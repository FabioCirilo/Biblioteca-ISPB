import React from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

export function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
