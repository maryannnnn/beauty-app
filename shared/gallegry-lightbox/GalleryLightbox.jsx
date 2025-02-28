import React, {FC, useEffect} from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import './gallery-lightbox.scss';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
//import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import dynamic from "next/dynamic";
import Image from "next/image";

const Masonry = dynamic(() => import("masonry-layout"), {ssr: false});


const GalleryLightbox = ({images}) => {

    return (
        <LightGallery elementClassNames="gallery" plugins={[lgZoom, lgShare, lgHash]} speed={500}>
                {images.map(img => (
                    <a key={img.id} href={img.sourceUrl}>
                        <Image
                            src={img.sourceUrl}
                            alt={img.altText || "Image"}
                            width={250}
                            height={250}
                            style={{objectFit: "cover"}}
                        />
                    </a>
                ))}
        </LightGallery>
    );
};

export default GalleryLightbox;

