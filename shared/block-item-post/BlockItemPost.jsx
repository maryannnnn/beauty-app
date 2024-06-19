import './block-item-post.scss'
import './media.scss'
import Link from "next/link";
import {BASIS_URL} from "../../app/config/config";
import React from "react";

const BlockItemPost = ({item}) => {

    return (
        <Link className="post-block"
              href={item.node.uri}>
            <div className="image-container">
                <img src={`${BASIS_URL}/${item.node.AcfPost.imageAnons.uri}`} alt={item.node.AcfPost.imageAnons.altText}/>
                <div className="bonus-block-title">{item.node.title}</div>
                <div className="bonus-block-title-short">{item.node.AcfPost.titleShort}</div>
                <div className="overlay"></div>
            </div>

        </Link>
    )
}

export default BlockItemPost

