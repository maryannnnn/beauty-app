import React from 'react';
import '../app/scss/app.scss'
import MainLayout from "../app/layouts/layout";

const Index = () => {

    const PageProps = {
        title: 'Главная',
        description: 'Главная',
        keywords: 'Главная'
    }

    return (
        <MainLayout title={PageProps.title} description={PageProps.description} keywords={PageProps.keywords}>
            <div className="main">
                <h1 className="">Hello, Next.js!</h1>
            </div>
        </MainLayout>
    )
}

export default Index
