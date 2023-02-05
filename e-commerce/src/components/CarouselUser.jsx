import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselUser() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel className="mt-3" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="https://i.ebayimg.com/images/g/k1QAAOSwRaJjxTXs/s-l400.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imgCarousel"
                        src="https://i.ebayimg.com/images/g/fMMAAOSwOXpjxTgv/s-l400.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="https://i.ebayimg.com/images/g/zVIAAOSwfeljxTXt/s-l400.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
