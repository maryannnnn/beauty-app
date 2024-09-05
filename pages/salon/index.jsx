import React from 'react';
import '../../app/scss/app.scss';
import './index.scss';
import './media.scss';
import Link from "next/link";
import LeftLayout from "../../app/layouts/LeftLayout";
import {useQuery} from "@apollo/client";
import apolloClient from '../../app/graphql/apollo-client';
import {GET_SALON_ALL} from "../../entities/salon/actions/salonActions";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Image from "next/image";
import {cleanHtml, cleanHtmlFull, trimTextFullCleanedHTML} from "../../shared/utils/utils-content";
import BlockItemSalons from "../../shared/block-item-salons/BlockItemSalons";

const IndexSalon = ({initialData}) => {
    const {loading, error, data} = useQuery(GET_SALON_ALL, {
        fetchPolicy: "cache-first",
        nextFetchPolicy: "cache-and-network",
    });

    const salon = data?.salon || initialData?.salon;
    const salons = data?.salons?.edges || initialData?.salons?.edges;

    const PageProps = {
        title: salon?.seo?.title || 'Компания',
        description: salon?.seo?.metaDesc || 'Компания'
    };

    return (
        <LeftLayout title={PageProps.title} description={PageProps.description}>
            <div className="salon">
                <div className="container">
                    {loading && !salon ? (
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
                        <>
                            <h1 className="salon__title">{cleanHtmlFull(salon?.AcfSalon?.titleLong || '')}</h1>
                            <div className="salon__anons">
                                {salon?.AcfSalon?.imageAnons && (
                                    <div className="salon__anons-img">
                                        <Link href={salon?.AcfSalon?.imageAnons?.sourceUrl} >
                                            <Image
                                                src={salon?.AcfSalon?.imageAnons?.sourceUrl}
                                                alt={salon?.AcfSalon?.imageAnons?.altText}
                                                width={400}
                                                height={400}
                                                layout="intrinsic"
                                            />
                                        </Link>
                                    </div>
                                )}
                                <div className="salon__anons-text"
                                     dangerouslySetInnerHTML={{__html: salon?.AcfSalon?.descriptionAnons || ''}}>
                                </div>
                            </div>
                            <div className="block-salons">
                                {salons?.filter(el => el.node?.id !== salon.id)
                                    .map(item => (
                                        <div key={item?.node?.id}>
                                            <BlockItemSalons item={item}/>
                                        </div>
                                    ))}
                            </div>
                            <div className="salon-block-center">
                                <h2 className="salon__title-main">{cleanHtmlFull(salon?.AcfSalon?.titleCenter || '')}</h2>
                                <div className="salon__description">
                                    {salon?.featuredImage?.node?.sourceUrl && (
                                        <div className="salon__description-img">
                                            <Link href={salon?.featuredImage?.node?.sourceUrl}>
                                                <Image
                                                    src={salon?.featuredImage?.node?.sourceUrl || ''}
                                                    alt={salon?.featuredImage?.node?.altText || ''}
                                                    width={400}
                                                    height={600}
                                                    layout="intrinsic"
                                                />
                                            </Link>
                                        </div>
                                    )}
                                    <div className="salon__description-text"
                                         dangerouslySetInnerHTML={{__html: salon?.content || ''}}>
                                    </div>
                                </div>
                            </div>
                            {salon?.AcfSalon?.video && (
                                <div className="salon-block-video">
                                    <h2
                                        className="salon__title-video">{cleanHtmlFull(salon?.AcfSalon?.videoTitle || '')}</h2>
                                    <div className="salon__video">
                                        <div className="salon__video-content"
                                             dangerouslySetInnerHTML={{__html: salon?.AcfSalon?.video || ''}}>
                                        </div>
                                        <div className="salon__video-text"
                                             dangerouslySetInnerHTML={{__html: salon?.AcfSalon?.videoDescription || ''}}>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="salon-block-bottom">
                                <h2 className="salon__title-gallery">{cleanHtmlFull(salon?.AcfSalon?.faqTitle || '')}</h2>
                                <div className="salon__gallery">
                                    <div className="salon__gallery-content"
                                         dangerouslySetInnerHTML={{__html: salon?.AcfSalon?.faqContent || ''}}>
                                    </div>
                                </div>
                            </div>
                        </>
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

    return {
        props: {
            initialData: data
        },
        // revalidate: 86400, // Пересборка каждый день
    };
}

export default IndexSalon;
