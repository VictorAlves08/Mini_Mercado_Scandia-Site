import Head from 'next/head';

import { Header, Content, Footer } from "@/components";
import logo_ico from '@/public/logo/ico_bg_blue.ico';

const Home = () => {
    return (
        <>
            <Head>
                <title>Minimercado Scandia</title>
                <link rel="icon" href={logo_ico} />

                <meta name="viewport" content="width=device-width,initial-scale=1" />

                {/* <link rel="canonical" href="https://minimercadoscandia.netlify.app/" /> */}
                {/* <meta property="og:url" content="https://minimercadoscandia.netlify.app/" /> */}

                <meta name="description" content="Minimercado Scandia | O melhor de Taboão da Serra na região Jd.Scandia!" />
                <meta property="og:type" content="Grocery Store" /><meta property="og:title" content="Minimercado Scandia | O melhor de Taboão da Serra na região Jd.Scandia!" />
                <meta property="og:description" content="Minimercado Scandia | O melhor de Taboão da Serra na região Jd.Scandia!" />
                <meta property="og:image" content={logo_ico} />
            </Head>
            <Header />
            <Content />
            <Footer />
        </>
    )
};

export default Home;
