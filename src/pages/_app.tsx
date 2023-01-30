import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import aws_exports from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import theme from "../ui-components/studioTheme";
Amplify.configure(aws_exports);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider theme={theme}>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}
