import { withFronteggApp } from "@frontegg/nextjs/pages";
import { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withFronteggApp(CustomApp, {
  hostedLoginBox: true,
  contextOptions: {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    baseUrl: process.env.FRONTEGG_BASE_URL,
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    clientId: process.env.FRONTEGG_CLIENT_ID,
  },
  lazyLoadAdminPortal: true,
  authOptions: {
    keepSessionAlive: true,
  },
});
