import React, {useEffect} from 'react';
import '../scss/app.scss'
import Head from "next/head";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import {BASIS_URL} from "../config/config.js";
import Script from "next/script";

const MainLayout = ({ children, title, description }) => {
    const canonicalUrl = `${BASIS_URL}`;

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.interdeal = {
                sitekey: "fcac143859674f824f930ee314d8e2b7",
                Position: "left",
                domains: {
                    js: "https://cdn.equalweb.com/",
                    acc: "https://access.equalweb.com/"
                },
                Menulang: "RU",
                btnStyle: {
                    vPosition: ["80%", "20%"],
                    scale: ["0.5", "0.5"],
                    color: {
                        main: "#6e7577",
                        second: "#ffffff"
                    },
                    icon: {
                        outline: false,
                        type: 1,
                        shape: "circle"
                    }
                }
            };

            const script = document.createElement("script");
            script.src = window.interdeal.domains.js + "core/5.0.13/accessibility.js";
            script.defer = true;
            script.integrity = "sha512-pk3CeR0KGJu+GfK2x2ybTSZ1o1qfua6XW2PRAxMWOhC85M3+CanPYmvRp6BOiW0/riZjWGerRN7+JH4wEF0wJQ==";
            script.crossOrigin = "anonymous";
            script.setAttribute("data-cfasync", "true");
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="wrapper">
            <Head>
                <title>{title + " | запись по хорошей стоимости в Израиле"}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:site_name" content="Центр Массажа Крылья Ветра" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:url" content={canonicalUrl} />
            </Head>

            {/* JSON-LD (структурированные данные) */}
            <Script
                id="json-ld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: title,
                        description: description,
                        url: canonicalUrl
                    })
                }}
            />

            <Header />
            <div className="main">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;


