import './block-item-bonus.scss'
import './media.scss'
import Link from "next/link";
import Image from 'next/image';
import React from "react";
import {sizeText} from "../../app/info/info";
import {trimText} from "../utils/utils-content";

const BlockItemBonus = ({item}) => {

    console.log("BlockItemSalons item: ", item)

    return (
        <Link className='block-item-bonus'
              href={item?.node?.uri}>
            <div className="block-item-bonus__image">
                <div className="block-item-bonus__image-img">
                    <Image
                        src={item?.node?.AcfBonus?.imageAnons?.sourceUrl}
                        alt={item?.node?.AcfBonus?.imageAnons?.altText}
                        width={250}
                        height={130}
                        layout="intrinsic"
                    />
                </div>
                <div className="block-item-bonus__image-title">{trimText(item?.node?.title, sizeText.ma)}</div>
                <div
                    className="block-item-bonus__image-short">{trimText(item?.node?.AcfBonus?.titleShort, sizeText.ma)}</div>
                <div className="block-item-bonus__image-overlay"></div>
            </div>
        </Link>
    )
}

export default BlockItemBonus

