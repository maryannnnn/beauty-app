import './block-item-massage.scss'
import './media.scss'
import Link from "next/link";
import {BASIS_URL} from "../../app/config/config";
import React from "react";
import {trimText, trimTextFullCleanedHTML} from "../utils/utils-content";
import {sizeText} from "../../app/info/info";

const BlockItemMassage = ({item}) => {

    console.log("BlockItemMassage data: ", item);

    return (
        <Link className="block-item-massage" href={item?.node?.uri}>
            <div className="block-item-massage__title">{trimText(item?.node?.title, sizeText.xp)}</div>
            <div className="block-item-massage__info">
                <img className="block-item-massage__info-img" src={`${BASIS_URL}/${item?.node?.AcfMassage?.imageAnons?.uri}`}
                     alt={item?.node?.AcfMassage?.imageAnons?.altText}/>
                <div className="block-item-massage__info-anons">{trimTextFullCleanedHTML(item?.node?.AcfMassage?.descriptionAnons, sizeText.xs)}</div>
            </div>
        </Link>
    )
}

export default BlockItemMassage

