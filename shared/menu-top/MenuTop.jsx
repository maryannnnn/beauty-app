import React from 'react';
import './menu-top.scss'
import './media.scss'
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useQuery} from '@apollo/client';
import {GET_MENU_TOP} from "@/entities/menu/actions/menuActions";
import client from '@/app/graphql/apollo-client';

const MenuTop = ({ initialData }) => {

    const { loading, error, data } = useQuery(GET_MENU_TOP, {
        initialData: initialData
    });

    return (
        <ul className="menu-top">
            {loading ? (
                <div>...</div>
                // <Box sx={{display: 'flex'}}>
                //     <CircularProgress/>
                // </Box>
            ) : error ? (
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        {error.graphQLErrors.map((err, index) => (
                            <div key={index}>{err.message}</div>
                        ))}
                    </Alert>
                </Stack>
            ) : data.menuItems.edges.length > 0 ? (
                data.menuItems.edges
                    // .sort((a, b) => a.node.order - b.node.order)
                    .map((link) =>
                        <li key={link.node.id}>
                            <Link href={link.node.path} className='menu-top__item'>
                                {link.node.label}
                            </Link>
                        </li>
                    )
            ) : (
                <div className="">no links</div>
            )
            }
        </ul>
    );
};

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_MENU_TOP
    });

    return {
        props: {
            initialData: data // Передаем данные в компонент через пропс initialData
        }
    };
}

export default MenuTop;



