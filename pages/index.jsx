import React from 'react';
import '../app/scss/app.scss'
import MainLayout from "../app/layouts/layout";
import MainBanner from "@/widgets/main-banner/MainBanner";
import MainBonus from "@/widgets/main-bonus/MainBonus";
import MainCompany from "@/widgets/main-company/MainCompany";
import MainMassage from "@/widgets/main-massage/MainMassage";
import MainCourse from "@/widgets/main-course/MainCourse";
import MainTestimonial from "@/widgets/main-testimonial/MainTestimonial";
import MainBlog from "@/widgets/main-blog/MainBlog";
import MainTitle from "@/widgets/main-title/MainTitle";

const Index = () => {

    const PageProps = {
        title: 'Главная',
        description: 'Главная',
        keywords: 'Главная'
    }

    return (
        <MainLayout title={PageProps.title} description={PageProps.description} keywords={PageProps.keywords}>
            <MainBanner/>
            <MainTitle/>
            <MainCompany/>
            <MainBonus/>
            <MainMassage/>
            <MainCourse/>
            <MainTestimonial/>
            <MainBlog/>
        </MainLayout>
    )
}

export default Index
