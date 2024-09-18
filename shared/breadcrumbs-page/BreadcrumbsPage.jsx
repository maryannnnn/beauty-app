import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {breadcrumbType} from "../../app/info/info";
import React from "react";

const BreadcrumbsPage = ({material, typeMaterial}) => {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumbs-page.');
    }

     return (
         <div role="presentation" onClick={handleClick}>
             <Breadcrumbs aria-label="breadcrumb">
                 <Link
                     underline="hover"
                     color="inherit"
                     href={breadcrumbType.find(item => item.id === 'main')?.url}
                 >
                     {breadcrumbType.find(item => item.id === 'main')?.title}
                 </Link>
                 <Link
                     underline="hover"
                     color="inherit"
                     href={breadcrumbType.find(item => item.id === typeMaterial)?.url}
                 >
                     {breadcrumbType.find(item => item.id === typeMaterial)?.title}
                 </Link>
                 <Typography sx={{ color: 'text.primary' }}>{material?.title}</Typography>
             </Breadcrumbs>
         </div>
     )
}

export  default BreadcrumbsPage