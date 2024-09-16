import './attributes.scss'
import './madia.scss'
import {cleanHtmlFull} from "../../shared/utils/utils-content";

const Attributes = ({massage}) => {
    const attributesArray = [
        {
            title: 'Преимущества',
            value: massage?.AcfMassage?.preimushhestva
        },
        {
            title: 'Эффекты',
            value: massage?.AcfMassage?.effekty
        },
        {
            title: 'Методики массажа',
            value: massage?.AcfMassage?.metodikiMassage
        },
        {
            title: 'Показания для массажа',
            value: massage?.AcfMassage?.pokazaniyaMassage
        },
        {
            title: 'Противопоказания',
            value: massage?.AcfMassage?.protivopokazaniya
        },
        {
            title: 'Зоны массажа',
            value: massage?.AcfMassage?.zonaMassage
        },
        {
            title: 'Продолжительность сеанса, мин.',
            value: massage?.AcfMassage?.prodolzhitelnostSeansa
        },
        {
            title: 'Составляющие процедуры',
            value: massage?.AcfMassage?.sostavlyayushhieProczedury
        },
        {
            title: 'Музыка',
            value: massage?.AcfMassage?.muzyka
        },
        {
            title: 'Ароматы',
            value: massage?.AcfMassage?.aromaty
        },
        {
            title: 'Массажист, выполняющий массаж',
            value: massage?.AcfMassage?.massazhist
        },
        {
            title: 'Рекомендуемая частота посещений',
            value: massage?.AcfMassage?.rekomenduemayaChastota
        },
        {
            title: 'Дополнительные услуги',
            value: massage?.AcfMassage?.dopolnitelnyeUslugi
        },
        {
            title: 'Цена за сеанс, шекель',
            value: massage?.AcfMassage?.czenaSeans
        },
        {
            title: 'Цена за пакет из 5-и сеансов, шекель',
            value: massage?.AcfMassage?.czenaPaket
        },
    ];

    console.log(attributesArray, "attributesArray")

    return (
        <div className="attributes">
            <div className="container">
                <div className="attributes__content">
                    {attributesArray && attributesArray.length > 0 &&
                    attributesArray.map((item, index) => (
                        item?.value && (
                            <div key={index} className='attributes__content-block'>
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
            </div>
        </div>
    );
};

export default Attributes;
