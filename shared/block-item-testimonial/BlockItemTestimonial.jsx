import './block-item-testimonial.scss'
import './media.scss'
import Link from "next/link";
import {BASIS_URL} from "../../app/config/config";
import React from "react";

const BlockItemTestimonial = ({item}) => {

    return (
        <Link className="testimonial-block"
              href={item.node.uri}>
            <div className="image-container">
                <div className="bonus-block-title">{item.node.title}</div>
                <div className="bonus-block-title-short">{item.node.AcfTestimonial.titleShort}</div>
                <div className="overlay"></div>
            </div>

        </Link>
    )
}

export default BlockItemTestimonial

