import "../../src/styles/globals.css";
import "@/assets/structure.css";
import "@/assets/base.css";
import "@/assets/main.css";
import "@/assets/dash_1.css";
import "@/assets/dash_2.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
