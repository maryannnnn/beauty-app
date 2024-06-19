import './main-testimonial.scss'
import './media.scss'
import MainTemplate from "../main-template/MainTemplate";
import {contentType, numberItems} from "../../app/info/info";
import React from "react";

const MainTestimonial = ({ data }) => {

    console.log("MMainTestimonial data: ", data);

    return (
        <div className="main-testimonial">
            <div className="container">
                    <MainTemplate
                        data={data}
                        number={numberItems.numberFour}
                        typeContent={contentType.testimonials}
                    />
            </div>
        </div>
    );
};

export default MainTestimonial

