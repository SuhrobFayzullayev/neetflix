"use client";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
