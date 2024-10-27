import AppStateProvider from "../state/AppStateProvider";
import React, { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
