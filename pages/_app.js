import AppStateProvider from "../state/AppStateProvider"

export default function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider> 
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
