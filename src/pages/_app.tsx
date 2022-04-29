import { Layout } from "@/layout";
import { AppProps } from "next/app";
import React from "react";
import "../styles/global.css";


const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;
