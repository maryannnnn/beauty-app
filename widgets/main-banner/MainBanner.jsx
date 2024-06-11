import React, {useRef, useState} from 'react';
import Image from 'next/image';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './main-banner.scss'
import './media.scss'

// import required modules
import {Parallax, Pagination, Navigation} from 'swiper/modules';
import ButtonRed from "@/shared/button-red/ButtonRed";
import {buttonOptions} from "../../shared/button-options/button-options";

const MainBanner = () => {

    const courseHandler = () => {

    }

    return (
        <div className="main-banner">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                         'background-image': `url('/images/banners/banner_2.jpg')`,
                    }}
                    data-swiper-parallax="-23%"
                >
                </div>
                <SwiperSlide>
                    <div className="container">
                        <div className="slide-info">
                            <div className="title" data-swiper-parallax="-300">
                                СКИДКА
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                -25% для новых гостей
                            </div>
                            <ButtonRed name={buttonOptions.massage} type="submit" onClick={courseHandler} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="slide-info">
                            <div className="title" data-swiper-parallax="-300">
                                ВЫГОДНО
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Скидки на тайский массаж
                            </div>
                            <ButtonRed name={buttonOptions.massage} type="submit" onClick={courseHandler} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="slide-info">
                            <div className="title" data-swiper-parallax="-300">
                                ЛЕТО, ПОЛДЕНЬ!
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                10% скидка на все программы
                            </div>
                            <ButtonRed name={buttonOptions.massage} type="submit" onClick={courseHandler} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MainBanner

