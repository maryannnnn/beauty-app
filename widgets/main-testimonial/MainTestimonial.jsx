import './main-testimonial.scss'
import './media.scss'
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import theme from "../../material.config";
import BlockSlideTestimonial from "../../shared/block-slide-testimonial/BlockSlideTestimonial";
import BlockHeader from "../../shared/block-header/BlockHeader";
import Link from "next/link";
import {buttonOptions} from "../../shared/button-options/button-options";

const MainTestimonial = ({data}) => {

    console.log("MMainTestimonial data: ", data);

    const typeCategory = 'category4'

    return (
        <div className='main-testimonial'>
            <div className='container'>
                <BlockHeader
                    title={data[typeCategory]?.AcfCategory?.categoryTitleLong1 || ''}
                    content={data[typeCategory]?.AcfCategory?.categoryDescriptionAnons || ''}
                    typeCategory={typeCategory}
                />
                <Swiper
                    style={{
                        '--swiper-navigation-color': theme.palette.secondary.contrastText,
                        '--swiper-pagination-color': theme.palette.secondary.contrastText,
                    }}
                    speed={600}
                    cssMode={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {data.testimonials?.edges
                        .filter(el => el?.node?.AcfTestimonial?.front === true)
                        .slice(0, 7)
                        .map(item => (
                            <SwiperSlide key={item?.node?.id}>
                                <BlockSlideTestimonial item={item} />
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className='main-testimonial__block'>
                    <Link className='main-testimonial__block-link'  href='/testimonial'>
                        {buttonOptions.see}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainTestimonial

