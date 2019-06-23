import React, { useEffect } from 'react';
import { CardWrapper } from './CardStyle';
import CardContent from './cardContent/CardContent';
import Slider from "react-slick";

const speakersData = [
    {
        imgUrl: "https://via.placeholder.com/300x372",
        name: "Paul Gorge",
        profession: "Web Developer"
    },
    {
        imgUrl: "https://via.placeholder.com/300x372",
        name: "James Smith",
        profession: "Web Developer"
    },
    {
        imgUrl: "https://via.placeholder.com/300x372",
        name: "Angelie Crawford",
        profession: "Web Designer"
    },
    {
        imgUrl: "https://via.placeholder.com/300x372",
        name: "Aleksandar",
        profession: "Web Developer"
    },
    {
        imgUrl: "https://via.placeholder.com/300x372",
        name: "Marko",
        profession: "Web Developer"
    },
    {
        imgUrl: "https://via.placeholder.com/300x372",
        name: "Ljubitelj klime",
        profession: "Web Developer - senior"
    }
]
var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: true,
    customPaging: function () {
        return <div class="dot-wrapper"><div class="dot-outer"><div class="dot-inner"></div></div></div>;
    },
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

export const Card = () => {


    return (
        <Slider {...settings} className="slider">
            {speakersData.map((singleSpeaker, index) => {
                const { imgUrl, name, profession } = singleSpeaker;
                return (

                    <CardWrapper key={index}>
                        <img src={imgUrl} />
                        <CardContent name={name} profession={profession} />
                    </CardWrapper>

                );
            })}
        </Slider >
    );
}

export const CardSecond = () => {

    return (

        speakersData.slice(0, 3).map((singleSpeaker, index) => {
            const { imgUrl, name, profession } = singleSpeaker;
            return (
                <CardWrapper key={index}>
                    <img src={imgUrl} />
                    <CardContent name={name} profession={profession} />
                </CardWrapper>
            );
        })

    );
}