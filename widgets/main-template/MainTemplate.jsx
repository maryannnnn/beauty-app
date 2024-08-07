import './main-template.scss';
import './media.scss';
import BlockHeader from "../../shared/block-header/BlockHeader";
import Link from "next/link";
import {buttonOptions} from "../../shared/button-options/button-options";
import React from "react";
import BlockGroupItems from "../../shared/block-group-items/BlockGroupItems";
import {contentType} from "../../app/info/info";

const MainTemplate = ({data, number, typeContent}) => {
    console.log("MainTemplate data: ", data);

    const typeCategory = (typeContent === contentType.bonuses ? 'category1'
        : typeContent === contentType.massages ? 'category2'
            : typeContent === contentType.courses ? 'category3'
                : typeContent === contentType.posts ? 'category5'
                    : '')

    return (
        <div className="main-template">
            <BlockHeader
                title={data[typeCategory]?.AcfCategory?.categoryTitleLong1 || ''}
                content={data[typeCategory]?.AcfCategory?.categoryDescriptionAnons || ''}
                typeCategory={typeCategory}
            />
            <BlockGroupItems
                data={data}
                number={number}
                typeContent={typeContent}
            />
            <Link className={`main-template__link${typeCategory === 'category3' ? '-white' : ''}`}
                  href={data[typeCategory]?.uri || '№'}>
                {buttonOptions.see}
            </Link>
        </div>
    );
}

export default MainTemplate;



