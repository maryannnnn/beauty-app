import './salon-page.scss';
import './media.scss';
import { useRouter } from 'next/router';
import { useQuery } from "@apollo/client";
import { GET_SALON_BY_SLUG, GET_SALON_ALL } from "../../entities/salon/actions/salonActions";
import apolloClient from "../../app/graphql/apollo-client";
import MainLayout from "../../app/layouts/MainLayout";
import React from "react";
import LeftLayout from "../../app/layouts/LeftLayout";

const SalonPage = ({ initialData }) => {
    const router = useRouter();
    const { slug } = router.query;

    console.log("Slug data: ", slug);

    const { loading, error, data } = useQuery(GET_SALON_BY_SLUG, {
        variables: { slug },
        skip: !slug,
        fetchPolicy: 'cache-and-network',
    });

    if (router.isFallback || loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const salon = data?.salonBy || initialData?.salonBy;

    const PageProps = {
        title: salon?.seo?.title || 'Компания',
        description: salon?.seo?.metaDesc || 'Компания'
    };

    return (
        <LeftLayout title={PageProps.title} description={PageProps.description}>
            <div className="salon-page">
                <div className="container">
            <h1>{salon.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: salon.content }} />
                </div>
            </div>
        </LeftLayout>
    );
};

export async function getStaticPaths() {
    const { data } = await apolloClient.query({
        query: GET_SALON_ALL,
    });

    console.log("Fetched salons data: ", data);

    const paths = data.salons.edges.map(item => ({
        params: { slug: item.node.slug },
    }));

    console.log("Generated paths: ", paths);

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const { data } = await apolloClient.query({
        query: GET_SALON_BY_SLUG,
        variables: { slug: params.slug },
    });

    return {
        props: {
            initialData: data,
        },
        //revalidate: 2592000, // Revalidate every 30 days
    };
}

export default SalonPage;




