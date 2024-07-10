import React from 'react';
import '../../app/scss/app.scss';
import './styles.scss';
import './index-media.scss';
import Link from "next/link";
import LeftLayout from "../../app/layouts/LeftLayout";
import {useQuery} from "@apollo/client";
import apolloClient from '../../app/graphql/apollo-client';
import {GET_SALON_ALL} from "../../entities/salon/actions/salonActions";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import DrawerLeft from "../../shared/drawer-left/DrawerLeft";

const IndexSalon = ({initialData}) => {

    const {loading, error, data} = useQuery(GET_SALON_ALL, {
        fetchPolicy: "cache-first",
        nextFetchPolicy: "cache-and-network",
    });

    const displayData = data || initialData;

    const PageProps = {
        title: displayData?.salon?.seo?.title || 'Компания',
        description: displayData?.salon?.seo?.metaDesc || 'Компания'
    };

    return (
        <LeftLayout title={PageProps.title} description={PageProps.description}>
            <div className="index-salon">
                <div className="container">
                    {loading && !displayData ? (
                        <div>...</div>
                    ) : error ? (
                        <Stack sx={{width: '100%'}} spacing={2}>
                            <Alert severity="error">
                                {error.graphQLErrors ? error.graphQLErrors.map((err, index) => (
                                    <div key={index}>{err.message}</div>
                                )) : 'An error occurred'}
                            </Alert>
                        </Stack>
                    ) : (
                        <div>
                            <h1>Компания</h1>
                            <ul>
                                {displayData?.salons?.edges?.map(item => (
                                    <li key={item?.node?.id}>
                                        <Link href={item?.node?.uri}>
                                            <div>{item?.node?.title}</div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </LeftLayout>
    );
};

export async function getStaticProps() {
    const {data} = await apolloClient.query({
        query: GET_SALON_ALL
    });

    console.log("Fetched data:", data);

    return {
        props: {
            initialData: data
        },
        //revalidate: 2592000, // Revalidate every 30 days
    };
}

export default IndexSalon;



