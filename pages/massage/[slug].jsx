import './index.scss';
import './media.scss';
import {useRouter} from 'next/router';
import {useQuery} from "@apollo/client";
import apolloClient from "../../app/graphql/apollo-client";
import React, {useEffect, useState} from "react";
import LeftLayout from "../../app/layouts/LeftLayout";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import {cleanHtmlFull} from "../../shared/utils/utils-content";
import Link from "next/link";
import Image from "next/image";
import {GET_MASSAGE_ALL, GET_MASSAGE_BY_SLUG} from "../../entities/massage/actions/massageActions";
import MainTestimonial from "../../widgets/main-testimonial/MainTestimonial";
import AttributesMassage from "../../widgets/attributes-massage/AtributesMassage";
import {attributeTitleMassage, breadcrumbType, testimonialTitleMassage, testimonialType} from "../../app/info/info";
import Breadcrumbs from "../../shared/breadcrumbs-page/BreadcrumbsPage";


const MassagePage = ({initialData}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const router = useRouter();
    const {slug} = router.query;

    const {loading, error, data} = useQuery(GET_MASSAGE_BY_SLUG, {
        variables: {slug},
        skip: !slug,
        fetchPolicy: 'cache-and-network',
    });

    if (router.isFallback || loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert severity="error">
                    {error.graphQLErrors ? error.graphQLErrors.map((err, index) => (
                        <div key={index}>{err.message}</div>
                    )) : 'An error occurred'}
                </Alert>
            </Stack>
        );
    }

    if (!isClient) {
        return <div>Loading...</div>;
    }

    const massage = data?.massageBy || initialData?.massageBy;
    const testimonials = data?.testimonials?.edges || initialData?.testimonials?.edges || [];

    const typeMaterial = "massage"

    const PageProps = {
        title: massage?.seo?.title || 'Компания',
        description: massage?.seo?.metaDesc || 'Компания'
    };

    return (
        <LeftLayout title={PageProps.title} description={PageProps.description}>
            <div className="massage">
                <div className="container">
                    <>
                        {massage?.AcfMassage?.descriptionAnons && (
                            <>
                                <h1 className="massage__title">{cleanHtmlFull(massage?.AcfMassage?.titleLong || '')}</h1>
                                <Breadcrumbs material={massage} typeMaterial={typeMaterial} />
                                <div className="massage__anons">
                                    {massage?.AcfMassage?.imageAnonsPage && (
                                        <div className="massage__anons-img">
                                            <Link href={massage?.AcfMassage?.imageAnonsPage?.sourceUrl}>
                                                <Image
                                                    src={massage?.AcfMassage?.imageAnonsPage?.sourceUrl}
                                                    alt={massage?.AcfMassage?.imageAnonsPage?.altText || 'Image'}
                                                    width={400}
                                                    height={400}
                                                    layout="intrinsic"
                                                />
                                            </Link>
                                        </div>
                                    )}
                                    <div className="massage__anons-text"
                                         dangerouslySetInnerHTML={{__html: massage?.AcfMassage?.descriptionAnons || ''}}>
                                    </div>
                                </div>
                            </>
                        )}
                        {massage && (
                            <>
                                <h2 className="massage__title-main">{attributeTitleMassage}</h2>
                                <AttributesMassage massage={massage}/>
                            </>
                        )}
                        {massage?.content && (
                            <>
                                <div className="massage-block-center">
                                    <h2 className="massage__title-main">{cleanHtmlFull(massage?.AcfMassage?.titleCenter || '')}</h2>
                                    <div className="massage__description">
                                        {massage?.featuredImage?.node?.sourceUrl && (
                                            <div className="massage__description-img">
                                                <Link href={massage?.featuredImage?.node?.sourceUrl}>
                                                    <Image
                                                        src={massage?.featuredImage?.node?.sourceUrl}
                                                        alt={massage?.featuredImage?.node?.altText || 'Image'}
                                                        width={400}
                                                        height={400}
                                                        layout="intrinsic"
                                                    />
                                                </Link>
                                            </div>
                                        )}
                                        <div className="massage__description-text"
                                             dangerouslySetInnerHTML={{__html: massage?.content || ''}}>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {massage?.AcfMassage?.video && (
                            <div className="massage-block-video">
                                <h2 className="massage__title-video">{cleanHtmlFull(massage?.AcfMassage?.videoTitle || '')}</h2>
                                <div className="massage__video">
                                    <div className="massage__video-content"
                                         dangerouslySetInnerHTML={{__html: massage?.AcfMassage?.video || ''}}>
                                    </div>
                                    <div className="massage__video-text"
                                         dangerouslySetInnerHTML={{__html: massage?.AcfMassage?.videoDescription || ''}}>
                                    </div>
                                </div>
                            </div>
                        )}
                        {testimonials && testimonials?.length > 0 && (
                            <>
                                <h2 className="massage__title-main">{testimonialTitleMassage}</h2>
                                <MainTestimonial data={data} type={testimonialType.massage}/>
                            </>
                        )}
                        {massage?.AcfMassage?.faqContent && (
                            <div className="massage-block-bottom">
                                <h2 className="massage__title-faq">{cleanHtmlFull(massage?.AcfMassage?.faqTitle || '')}</h2>
                                <div className="massage__faq">
                                    <div className="massage__faq-content"
                                         dangerouslySetInnerHTML={{__html: massage?.AcfMassage?.faqContent || ''}}>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                </div>
            </div>
        </LeftLayout>
    );
};

export async function getStaticPaths() {
    const {data} = await apolloClient.query({
        query: GET_MASSAGE_ALL,
    });

    console.log("Fetched massages data: ", data);

    const paths = data.massages.edges.map(item => ({
        params: {slug: item.node.slug},
    }));

    console.log("Generated paths: ", paths);

    return {paths, fallback: true};
}

export async function getStaticProps({params}) {
    const {data} = await apolloClient.query({
        query: GET_MASSAGE_BY_SLUG,
        variables: {slug: params.slug},
    });

    return {
        props: {
            initialData: data,
        },
        //revalidate: 2592000, // Revalidate every 30 days
    };
}

export default MassagePage;




