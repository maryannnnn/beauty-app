import './block-item-course.scss'
import './media.scss'
import Link from "next/link";
import Image from 'next/image';
import {BASIS_URL} from "../../app/config/config";
import React from "react";
import {trimTextFullCleanedHTML} from "../utils/utils-content";
import {sizeText} from "../../app/info/info";
import {buttonOptions} from "../button-options/button-options";
import ButtonRed from "../button-red/ButtonRed";
import {useRouter} from "next/router";

const BlockItemCourse = ({item}) => {

    const router = useRouter();

    const courseHandler = (url) => {
        router.push(url);
    }

    return (
        <>
            <Link className="block-item-course" href={item?.node?.uri}>
                <div className="block-item-course__img">
                    <Image
                        src={item?.node?.AcfCourse?.imageAnons?.sourceUrl}
                        alt={item?.node?.AcfCourse?.imageAnons?.altText}
                        width={549}
                        height={274}
                        layout="intrinsic"
                    />
                </div>
                <div className="block-item-course__img-overlay "></div>
                <div className="block-item-course__info">
                    <div className="block-item-course__info-link">
                        Курсы
                    </div>

                    <div className="block-item-course__info-title">{item?.node?.title}</div>
                    <div className="block-item-course__info-description-anons">
                        {trimTextFullCleanedHTML(item?.node?.AcfCourse?.descriptionAnons, sizeText.s)}
                    </div>
                    <ButtonRed name={buttonOptions.detail} type="submit"
                               onClick={() => courseHandler(item?.node?.uri)}/>
                </div>
            </Link>
        </>
    )
}

export default BlockItemCourse

