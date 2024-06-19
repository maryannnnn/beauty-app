import './block-item-course.scss'
import './media.scss'
import Link from "next/link";
import {BASIS_URL} from "../../app/config/config";
import React from "react";
import {trimTextFullCleanedHTML} from "../utils/utils-content";
import {sizeText} from "../../app/info/info";
import {buttonOptions} from "../button-options/button-options";
import ButtonRed from "../button-red/ButtonRed";

const BlockItemCourse = ({item}) => {

    const courseHandler = () => {

    }

    return (
        <>
            <Link className="block-item-course" href={item.node.uri}>
                <img className="block-item-course__img" src={`${BASIS_URL}/${item.node.AcfCourse.imageAnons.uri}`}
                     alt={item.node.AcfCourse.imageAnons.altText}/>
                <div className="block-item-course__img-overlay "></div>
                <div className="block-item-course__info">
                    <div className="block-item-course__info-link">
                        Курсы
                    </div>

                    <div className="block-item-course__info-title">{item.node.title}</div>
                    <div className="block-item-course__info-description-anons">
                        {trimTextFullCleanedHTML(item.node.AcfCourse.descriptionAnons, sizeText.s)}
                    </div>
                    <ButtonRed name={buttonOptions.detail} type="submit" onClick={courseHandler}/>
                </div>
            </Link>
        </>
    )
}

export default BlockItemCourse

