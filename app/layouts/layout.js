import React from 'react';
import '../scss/app.scss'
import Head from "next/head";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";

const MainLayout
    = ({
           children,
           title,
           description,
           keywords
       }) => {
    return (
        <div className="wrapper">
            <Head>
                <title>{title + ` | купить по цене со склада продажа стоимости в Москве с доставкой`}</title>
                <meta name="description" content={description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "автозапчастию, запчасти для джип"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;


