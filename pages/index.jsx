import React from 'react';
import '../app/scss/app.scss';
import { SpeedInsights } from "@vercel/speed-insights/next";
import MainLayout from "../app/layouts/layout";
import MainBanner from "@/widgets/main-banner/MainBanner";
import MainBonus from "@/widgets/main-bonus/MainBonus";
import MainCompany from "@/widgets/main-company/MainCompany";
import MainMassage from "@/widgets/main-massage/MainMassage";
import MainCourse from "@/widgets/main-course/MainCourse";
import MainTestimonial from "@/widgets/main-testimonial/MainTestimonial";
import MainBlog from "@/widgets/main-post/MainPost";
import MainTitle from "@/widgets/main-title/MainTitle";
import { useQuery } from "@apollo/client";
import apolloClient from '../app/graphql/apollo-client';
import { GET_HOME_DATA } from "../entities/main/actions/mainActions";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const Index = ({ initialData }) => {
    const PageProps = {
        title: 'Главная',
        description: 'Главная',
        keywords: 'Главная'
    };

    const { loading, error, data } = useQuery(GET_HOME_DATA, {
        fetchPolicy: "cache-first", // Use initial data first
        nextFetchPolicy: "cache-and-network" // Then fetch from network
    });

    const displayData = data || initialData;

    return (
        <MainLayout title={PageProps.title} description={PageProps.description} keywords={PageProps.keywords}>
            <MainBanner />
            <MainTitle />
            {loading && !displayData ? (
                <div>...</div>
            ) : error ? (
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        {error.graphQLErrors ? error.graphQLErrors.map((err, index) => (
                            <div key={index}>{err.message}</div>
                        )) : 'An error occurred'}
                    </Alert>
                </Stack>
            ) : (
                <>
                    <MainCompany data={displayData} />
                    <MainBonus data={displayData} />
                    <MainMassage data={displayData} />
                    <MainCourse data={displayData} />
                    {/*<MainTestimonial data={displayData} />*/}
                    {/*<MainBlog data={displayData} />*/}
                </>
            )}
            <SpeedInsights />
        </MainLayout>
    );
};

export async function getStaticProps() {
    const { data } = await apolloClient.query({
        query: GET_HOME_DATA
    });

    console.log("Fetched data:", data);

    return {
        props: {
            initialData: data
        },
        //revalidate: 2592000, // Revalidate every 30 days
    };
}

export default Index;


