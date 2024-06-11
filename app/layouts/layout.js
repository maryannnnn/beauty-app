import React from 'react';
import '../scss/app.scss'
import Head from "next/head";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import {BASIS_URL} from "@/app/config/config";

const MainLayout
    = ({
           children,
           title,
           description,
           keywords
       }) => {
    const canonicalUrl = `${BASIS_URL}`;

    return (
        <div className="wrapper">
            <Head>
                <title>{title + ` | запись по хорошей стоимости в Израиле`}</title>
                <meta name="description" content={description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "массаж, курсы массажа"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="canonical" href={canonicalUrl}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:url" content={canonicalUrl}/>
                <meta property="og:type" content="article"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:url" content={canonicalUrl}/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "${title}",
                        "description": "${description}",
                        "url": "${canonicalUrl}",
                    })}
                </script>
            </Head>
            <Header/>
            <div className="main">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;


