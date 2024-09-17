import './attributes.scss'
import './madia.scss'
import {cleanHtmlFull} from "../../shared/utils/utils-content";
import {buttonOptions} from "../../shared/button-options/button-options";
import ButtonRed from "../../shared/button-red/ButtonRed";
import {attributePriceMassage, testimonialTitleMassage} from "../../app/info/info";
import React from "react";

const Attributes = ({massage}) => {

    const massageHandler = () => {
        window.open('https://calendly.com/sansaranervana/massage', '_blank');
    }


    const attributesArray = [
        {
            id: 0,
            title: 'Преимущества',
            value: massage?.AcfMassage?.preimushhestva
        },
        {
            id: 1,
            title: 'Эффекты',
            value: massage?.AcfMassage?.effekty
        },
        {
            id: 2,
            title: 'Показания для массажа',
            value: massage?.AcfMassage?.pokazaniyaMassage
        },
        {
            id: 3,
            title: 'Противопоказания',
            value: massage?.AcfMassage?.protivopokazaniya
        },
        {
            id: 4,
            title: 'Методики массажа',
            value: massage?.AcfMassage?.metodikiMassage
        },
        {
            id: 5,
            title: 'Зоны массажа',
            value: massage?.AcfMassage?.zonaMassage
        },
        {
            id: 7,
            title: 'Составляющие процедуры',
            value: massage?.AcfMassage?.sostavlyayushhieProczedury
        },
        {
            id: 8,
            title: 'Дополнительные услуги',
            value: massage?.AcfMassage?.dopolnitelnyeUslugi
        },
        {
            id: 9,
            title: 'Музыка',
            value: massage?.AcfMassage?.muzyka
        },
        {
            id: 10,
            title: 'Ароматы',
            value: massage?.AcfMassage?.aromaty
        },
        {
            id: 11,
            title: 'Массажист, выполняющий массаж',
            value: massage?.AcfMassage?.massazhist
        },
        {
            id: 12,
            title: 'Рекомендуемая частота посещений',
            value: massage?.AcfMassage?.rekomenduemayaChastota
        },
        {
            id: 13,
            title: 'Продолжительность сеанса, мин.',
            value: massage?.AcfMassage?.prodolzhitelnostSeansa
        },

    ];

    const attributesArrayPrice = [
        {
            id: 0,
            title: 'Цена за сеанс, шекель',
            value: massage?.AcfMassage?.czenaSeans
        },
        {
            id: 1,
            title: 'Цена за пакет из 5-и сеансов, шекель',
            value: massage?.AcfMassage?.czenaPaket
        },
        {
            id: 2,
            title: 'Цена за пакет из 10-и сеансов, шекель',
            value: massage?.AcfMassage?.czenaPaket2
        }
    ]

    return (
        <div className="attributes">
            <div className="container">
                <div className="attributes__content">
                    {attributesArray && attributesArray.length > 0 &&
                    attributesArray.map(item => (
                        item?.value && (
                            <div key={item.id} className='attributes__content-block'>
                                <h4 className='attributes__content-block-title'>{item.title}</h4>
                                <div className='attributes__content-block-text'>
                                    {Array.isArray(item.value) ? (
                                        <div className='attributes__content-block-text__row'>
                                            {item.value.map((val, idx) => (
                                                <div key={val.id} className='attributes__content-block-text__link'>
                                                    {val?.title}
                                                    {idx < item.value.length - 1 && ', '}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>{cleanHtmlFull(item.value || '')}</p>
                                    )}
                                </div>
                            </div>
                        )
                    ))
                    }
                </div>
                <h2 className="attributes__price-title">{attributePriceMassage}</h2>
                <div className="attributes__price">
                    <div className="attributes__price-info">
                        {attributesArrayPrice.length > 0 &&
                        attributesArrayPrice.map(item =>
                            <div className="attributes__price-info__element">
                                <div
                                    className="attributes__price-info__element-title">{item?.title}: &nbsp;</div>
                                <div
                                    className="attributes__price-info__element-text">{item?.value}&#8362;</div>
                            </div>
                        )}
                    </div>
                    <div className="attributes__price-button">
                        <ButtonRed name={buttonOptions.massage} type="submit" onClick={massageHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attributes;
