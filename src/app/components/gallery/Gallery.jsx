import React from 'react';
import { SectionWrapper, Image } from './GalleryStyle';

const imageUrl = ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"]

const images = imageUrl.map((url, index) => {
    return <Image src={url} key={index} className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50" data-wow-delay={`${0 + index / 10}s`} />
})

const Gallery = () => {
    return (
        <SectionWrapper>
            {images}
        </SectionWrapper>
    );
}

export default Gallery;