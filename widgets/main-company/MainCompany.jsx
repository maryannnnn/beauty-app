import './main-company.scss'
import './media.scss'
import React from "react";
import Link from 'next/link';
import ButtonRed from "../../shared/button-red/ButtonRed";
import {useRouter} from 'next/router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {buttonOptions} from "../../shared/button-options/button-options";
import {contactSalon, sizeText} from "../../app/info/info";
import {useQuery} from "@apollo/client";
import {GET_SALON_ABOUT, GET_SALON_ALL} from "../../entities/salon/actions/salonActions";
import {trimTextFullCleanedHTML} from "../../shared/utils/utils-content";
import {FiArrowRight} from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";

const MainCompany = ({initialAboutData, initialAllData}) => {
    const {loading: loadingAbout, error: errorAbout, data: dataAbout} = useQuery(GET_SALON_ABOUT, {
        initialData: initialAboutData
    });

    const {loading: loadingAll, error: errorAll, data: dataAll} = useQuery(GET_SALON_ALL, {
        initialData: initialAllData
    });

    console.log("data: ", dataAbout)
    console.log("dataAll: ", dataAll)

    const router = useRouter();

    const handleClick = () => {
        router.push('salon/about');
    };

    return (
        <div className='main-company'>
            <div className="container">
                {loadingAbout ? (
                    <div>...</div>
                ) : errorAbout ? (
                    <Stack sx={{width: '100%'}} spacing={2}>
                        <Alert severity="error">
                            {dataAbout.graphQLErrors.map((err, index) => (
                                <div key={index}>{err.message}</div>
                            ))}
                        </Alert>
                    </Stack>
                ) : (
                    <div className="main-company__block">
                        <div className="main-company__title">{dataAbout.salon.title}</div>
                        <div className="main-company__content">
                            <div className="main-company__content-info">
                                <div className="main-company__content-info-description">
                                    {trimTextFullCleanedHTML(dataAbout.salon.content, sizeText.l)}
                                </div>
                                <ul className="main-company__content-info-options">
                                    {loadingAll ? (
                                        <div>...</div>
                                    ) : errorAll ? (
                                        <Stack sx={{width: '100%'}} spacing={2}>
                                            <Alert severity="error">
                                                {dataAll.graphQLErrors.map((err, index) => (
                                                    <div key={index}>{err.message}</div>
                                                ))}
                                            </Alert>
                                        </Stack>
                                    ) : dataAll.salons.edges
                                        .filter(el => el.node.id !== 'cG9zdDozNjk2')
                                        .map(item =>
                                                <li key={item.node.id}>
                                                    <Link className="main-company__content-info-options__link"
                                                          href={item.node.uri}>
                                                        <BsArrowRightShort/>{item.node.title}
                                                    </Link>
                                                </li>
                                        )
                                    }
                                </ul>
                                <ButtonRed name={buttonOptions.read} type="button" onClick={handleClick}/>
                            </div>
                            <div className="main-company__content-video"
                                 dangerouslySetInnerHTML={{__html: contactSalon.video}}></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const {dataAbout} = await client.query({
        query: GET_SALON_ABOUT,
    });
    const {dataAll} = await client.query({
        query: GET_SALON_ALL,
    });

    return {
        props: {
            initialAboutData: dataAbout,
            initialAllData: dataAll
        }
    };
}

export default MainCompany

