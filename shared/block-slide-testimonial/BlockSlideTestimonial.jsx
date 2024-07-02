import './block-slide-testimonial.scss'
import './media.scss'
import Link from "next/link";
import React from "react";
import {trimText, trimTextFullCleanedHTML} from "../utils/utils-content";
import {sizeText} from "../../app/info/info";
import {BASIS_URL} from "../../app/config/config";

const BlockSlideTestimonial = ({item}) => {

    return (
        <div className="block-slide-testimonial">
            <img className="block-slide-testimonial__img"
                 src={`${BASIS_URL}/${item?.node?.AcfTestimonial?.groupInfoPost?.imageAuthor?.uri}`}
                 alt={item?.node?.AcfTestimonial?.groupInfoPost?.imageAuthor?.altText}/>
            <div className="block-slide-testimonial__author">
                <div className="block-slide-testimonial__author-name">
                    {trimText(item?.node?.AcfTestimonial?.groupInfoPost?.fullName, sizeText.ma)}
                </div>
                <div className="block-slide-testimonial__author-speciality">
                    {trimText(item?.node?.AcfTestimonial?.groupInfoPost?.speciality, sizeText.ma)}
                </div>
            </div>
            <img className="block-slide-testimonial__icon" src="/images/testimonials/pencil.png"/>
            <Link className="block-slide-testimonial__text" href={item?.node?.uri}>
                <div className="block-slide-testimonial__text-row">
                    <div className="block-slide-testimonial__text-row-title">Причина выбора:&nbsp;</div>
                    <div>{trimText(item?.node?.AcfTestimonial?.whyChiced, sizeText.xt)}</div>
                </div>
                <div className="block-slide-testimonial__text-row">
                    <div className="block-slide-testimonial__text-row-title">Что в процессе:&nbsp;</div>
                    <div>{trimText(item?.node?.AcfTestimonial?.whatProcess, sizeText.xt)}</div>
                </div>
                <div className="block-slide-testimonial__text-row">
                    <div className="block-slide-testimonial__text-row-title">Послевкусие:&nbsp;</div>
                    <div>{trimText(item?.node?.AcfTestimonial?.afterTaste, sizeText.xt)}</div>
                </div>
                <div
                    className="block-slide-testimonial__text-description">{trimTextFullCleanedHTML(item?.node?.AcfTestimonial?.descriptionAnons, sizeText.m)}</div>
            </Link>
        </div>
    )
}

export default BlockSlideTestimonial

