import Head from "next/head";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import ToastProvider from "../layouts/ToastProvider";

export default function Shop({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="description" content="" />
      </Head>
      <Header />
      <ToastProvider>{children}</ToastProvider>
      <Footer />
    </>
  );
}
