import './block-header.scss'
import './media.scss'
import React from "react";
import {trimTextFullCleanedHTML} from "../utils/utils-content";
import {sizeText} from "../../app/info/info";

const BlockHeader = ({title, content, typeCategory = null}) => {

    return (
        <div className="block-header">
            <div className={`block-header__title${typeCategory === 'category3' ? '-white' : ''}`}>{title}</div>
            <div
                className={`block-header__content${typeCategory === 'category3' ? '-white' : ''}`}>{trimTextFullCleanedHTML(content, sizeText.xm)}</div>
        </div>
    )
}

export default BlockHeader