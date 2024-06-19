import './block-item-bonus.scss'
import './media.scss'
import Link from "next/link";
import {BASIS_URL} from "../../app/config/config";
import React from "react";
import {sizeText} from "../../app/info/info";
import {trimText} from "../utils/utils-content";

const BlockItemBonus = ({item}) => {

    console.log("BlockItemBonus item: ", item)

    return (
        <Link className='block-item-bonus'
              href={item.node.uri}>
            <div className="image-container-bonus">
                <img src={`${BASIS_URL}/${item.node.AcfBonus.imageAnons.uri}`} alt={item.node.AcfBonus.imageAnons.altText}/>
                <div className="bonus-block-title">{trimText(item.node.title, sizeText.ma)}</div>
                <div className="bonus-block-title-short">{trimText(item.node.AcfBonus.titleShort, sizeText.ma)}</div>
                <div className="overlay"></div>
            </div>
        </Link>
    )
}

export default BlockItemBonus

