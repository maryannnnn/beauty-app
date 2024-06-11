import './main-bonus.scss'
import './media.scss'
import BlockHeader from "../../shared/block-header/BlockHeader";
import {useQuery} from "@apollo/client";
import {GET_BONUS, GET_BONUS_ALL} from "../../entities/bonus/actions/bonusActions";
import {useRouter} from "next/router";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Link from "next/link";
import {BsArrowRightShort} from "react-icons/bs";
import React from "react";
import {buttonOptions} from "../../shared/button-options/button-options";
import {BASIS_URL} from "../../app/config/config";
import BonusBlock from "../../shared/bonus-block/BonusBlock";

const MainBonus = ({initialBonusData, initialBonusAllData}) => {
    const {loading: loadingBonus, error: errorBonus, data: dataBonus} = useQuery(GET_BONUS, {
        initialData: initialBonusData
    });

    const {loading: loadingBonusAll, error: errorBonusAll, data: dataBonusAll} = useQuery(GET_BONUS_ALL, {
        initialData: initialBonusAllData
    });

    console.log("data: ", dataBonus)
    console.log("dataAll: ", dataBonusAll)

    const router = useRouter();

    return (
        <div className="main-bonus">
            <div className="container">
                <div className="main-bonus__info">
                    {loadingBonus ? (
                        <div>...</div>
                    ) : errorBonus ? (
                        <Stack sx={{width: '100%'}} spacing={2}>
                            <Alert severity="error">
                                {dataBonus.graphQLErrors.map((err, index) => (
                                    <div key={index}>{err.message}</div>
                                ))}
                            </Alert>
                        </Stack>
                    ) : (
                        <BlockHeader
                            title={dataBonus.category.AcfCategory.categoryTitleLong1}
                            content={dataBonus.category.AcfCategory.categoryDescription2}
                        />
                    )}
                    <ul className="main-bonus__info-options">
                        {loadingBonusAll ? (
                            <div>...</div>
                        ) : errorBonusAll ? (
                            <Stack sx={{width: '100%'}} spacing={2}>
                                <Alert severity="error">
                                    {dataBonusAll.graphQLErrors.map((err, index) => (
                                        <div key={index}>{err.message}</div>
                                    ))}
                                </Alert>
                            </Stack>
                        ) : dataBonusAll.bonuses.edges
                            .map(item =>
                                <li key={item.node.id}>
                                    <BonusBlock item={item}/>
                                </li>
                            )
                        }
                    </ul>
                    {loadingBonus ? (
                        <div>...</div>
                    ) : (
                        <Link className="main-bonus__info-link"
                              href={dataBonus.category.uri}>
                            {buttonOptions.see}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const {dataBonus} = await client.query({
        query: GET_BONUS,
    });
    const {dataBonusAll} = await client.query({
        query: GET_BONUS_ALL,
    });

    return {
        props: {
            initialBonusData: dataBonus,
            initialBonusAllData: dataBonusAll
        }
    };
}

export default MainBonus

