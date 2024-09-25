import './index.scss';
import './media.scss';
import {useRouter} from 'next/router';
import {useQuery} from "@apollo/client";
import {GET_TESTIMONIAL_BY_SLUG, GET_TESTIMONIAL_ALL} from "../../entities/testimonial/actions/testimonialActions";
import apolloClient from "../../app/graphql/apollo-client";
import React from "react";
import LeftLayout from "../../app/layouts/LeftLayout";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import {cleanHtmlFull} from "../../shared/utils/utils-content";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../shared/breadcrumbs-page/BreadcrumbsPage";

const TestimonialPage = ({initialData}) => {
    const router = useRouter();
    const {slug} = router.query;

    console.log("Slug data: ", slug);

    const {loading, error, data} = useQuery(GET_TESTIMONIAL_BY_SLUG, {
        variables: {slug},
        skip: !slug,
        fetchPolicy: 'cache-and-network',
    });

    if (router.isFallback || loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const testimonial = data?.testimonialBy || initialData?.testimonialBy;

    const typeMaterial = "testimonial"

    const PageProps = {
        title: testimonial?.seo?.title || 'Компания',
        description: testimonial?.seo?.metaDesc || 'Компания'
    };

    return (
        <LeftLayout title={PageProps.title} description={PageProps.description}>
            <div className="testimonial">
                <div className="container">
                    {error ? (
                        <Stack sx={{width: '100%'}} spacing={2}>
                            <Alert severity="error">
                                {error.graphQLErrors ? error.graphQLErrors.map((err, index) => (
                                    <div key={index}>{err.message}</div>
                                )) : 'An error occurred'}
                            </Alert>
                        </Stack>
                    ) : (
                        <>
                            <h1 className="testimonial__title">{cleanHtmlFull(testimonial?.AcfTestimonial?.titleLong)}</h1>
                            <Breadcrumbs material={testimonial} typeMaterial={typeMaterial} />
                            <div className="testimonial__anons">
                                <div className="testimonial__anons-img">
                                    {testimonial?.AcfTestimonial?.imageAnons ? (
                                        <Link href={testimonial?.AcfTestimonial?.imageAnons?.sourceUrl}>
                                            <Image
                                                src={testimonial?.AcfTestimonial?.imageAnons?.sourceUrl}
                                                alt={testimonial?.AcfTestimonial?.imageAnons?.altText}
                                                width={500}
                                                height={400}
                                                layout="intrinsic"
                                            />
                                        </Link>
                                    ) : testimonial?.AcfTestimonial?.groupInfoPost?.imageAuthor ? (
                                        <Link href={testimonial?.AcfTestimonial?.groupInfoPost?.imageAuthor?.sourceUrl}>
                                            <Image
                                                src={testimonial?.AcfTestimonial?.groupInfoPost?.imageAuthor?.sourceUrl}
                                                alt={testimonial?.AcfTestimonial?.groupInfoPost?.imageAuthor?.altText}
                                                width={500}
                                                height={400}
                                                layout="intrinsic"
                                            />
                                        </Link>
                                    ) : ('')
                                    }
                                </div>
                                <div className="testimonial__anons-text"
                                     dangerouslySetInnerHTML={{__html: testimonial?.AcfTestimonial?.descriptionAnons}}>
                                </div>
                            </div>
                            <div className="testimonial-block-center">
                                <h2 className="testimonial__title-main">{cleanHtmlFull(testimonial?.AcfTestimonial?.titleCenter)}</h2>
                                <div className="testimonial__description">
                                    {testimonial?.AcfTestimonial?.imageAnons && (
                                        <div className="testimonial__description-img">
                                            <Link href={testimonial?.featuredImage?.node?.sourceUrl}>
                                                <Image
                                                    src={testimonial?.featuredImage?.node?.sourceUrl}
                                                    alt={testimonial?.featuredImage?.node?.altText}
                                                    width={500}
                                                    height={400}
                                                    layout="intrinsic"
                                                />
                                            </Link>
                                        </div>
                                    )}
                                    <div className="testimonial__description-text"
                                         dangerouslySetInnerHTML={{__html: testimonial?.content}}>
                                    </div>
                                </div>
                            </div>
                            {testimonial?.AcfTestimonial?.video && (
                                <div className="testimonial-block-video">
                                    <h2
                                        className="testimonial__title-video">{cleanHtmlFull(testimonial?.AcfTestimonial?.videoTitle)}</h2>
                                    <div className="testimonial__video">
                                        <div className="testimonial__video-content"
                                             dangerouslySetInnerHTML={{__html: testimonial?.AcfTestimonial?.video}}>
                                        </div>
                                        <div className="testimonial__video-text"
                                             dangerouslySetInnerHTML={{__html: testimonial?.AcfTestimonial?.videoDescription}}>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="testimonial-block-bottom">
                                <h2 className="testimonial__title-faq">{cleanHtmlFull(testimonial?.AcfTestimonial?.faqTitle)}</h2>
                                <div className="testimonial__faq">

                                    <div className="testimonial__faq-content"
                                         dangerouslySetInnerHTML={{__html: testimonial?.AcfTestimonial?.faqContent}}>
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

export async function getStaticPaths() {
    const {data} = await apolloClient.query({
        query: GET_TESTIMONIAL_ALL,
    });

    console.log("Fetched testimonials data: ", data);

    const paths = data.testimonials.edges.map(item => ({
        params: {slug: item.node.slug},
    }));

    console.log("Generated paths: ", paths);

    return {paths, fallback: true};
}

export async function getStaticProps({params}) {
    const {data} = await apolloClient.query({
        query: GET_TESTIMONIAL_BY_SLUG,
        variables: {slug: params.slug},
    });

    return {
        props: {
            initialData: data,
        },
        //revalidate: 2592000, // Revalidate every 30 days
    };
}

export default TestimonialPage;




