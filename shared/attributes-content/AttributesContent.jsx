import './media.scss'
import './attributes-content.scss'
import {cleanHtmlFull} from "../utils/utils-content";
import React from "react";

const AttributesContent = ({attributesArray}) => {

    return (
        <div className="attributes__content">
            {attributesArray && attributesArray?.length > 0 &&
            attributesArray?.map(item => (
                item?.value && (
                    <div key={item?.id} className='attributes__content-block'>
                        <h4 className='attributes__content-block-title'>{item?.title}</h4>
                        <div className='attributes__content-block-text'>
                            {Array.isArray(item.value) ? (
                                <div className='attributes__content-block-text__row'>
                                    {item.value.map((val, idx) => (
                                        <div key={val.id} className='attributes__content-block-text__link'>
                                            {val.title}
                                            {idx < item.value.length - 1 && ', '}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div dangerouslySetInnerHTML={{__html: item?.value || ''}}></div>
                            )}
                        </div>
                    </div>
                )
            ))
            }
        </div>
    )
}

export default AttributesContent