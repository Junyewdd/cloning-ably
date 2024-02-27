import Head from "@/components/main/Head";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '500px', height: '100vh', gap: 2, bgcolor: 'white'}}>
        <Head/>
        <Box sx={{height: '100vh'}}>
        {getLayout(<Component {...pageProps} />)}
        </Box>
      </Box>
    </Box>
  )
}
