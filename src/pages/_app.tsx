import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider ,useTheme  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import {CustomTheme} from "@/styles/CustomTheme"

export default function App({ Component, pageProps }: AppProps) {



  return (
    <ThemeProvider theme={CustomTheme} >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
