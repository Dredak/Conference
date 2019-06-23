import React from 'react';
import * as HappyClientsContentStyle from './HappyClientsContentStyle';
import OuterSingleProfile from './outer_single_profile/OuterSingleProfile';
import Slider from "react-slick";
import WOW from 'wowjs';

const { HappyClientsWrapper, InnerWrapper2, ProfileOuterBox } = HappyClientsContentStyle;
const profileItems = [{
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum? At fascilits dasdritop mentas",
    name: "Roger Scott",
    occupation: "INTERFACE DESIGNER",
    img: "http://via.placeholder.com/100",

}, {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum? At fascilits dasdritop mentas",
    name: "Roger Scott",
    occupation: "INTERFACE DESIGNER",
    img: "http://via.placeholder.com/100",
}, {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum? At fascilits dasdritop mentas",
    name: "Roger Scott",
    occupation: "INTERFACE DESIGNER",
    img: "http://via.placeholder.com/100",
},
{
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum? At fascilits dasdritop mentas",
    name: "Roger Scott",
    occupation: "INTERFACE DESIGNER",
    img: "http://via.placeholder.com/100",

}, {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum? At fascilits dasdritop mentas",
    name: "Roger Scott",
    occupation: "INTERFACE DESIGNER",
    img: "http://via.placeholder.com/100",
}, {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum? At fascilits dasdritop mentas",
    name: "Roger Scott",
    occupation: "INTERFACE DESIGNER",
    img: "http://via.placeholder.com/100",
}
];

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

class HappyClientsContent extends React.Component {

    constructor() {
        super()
        this.state = {};
    };

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {

        return (
            <>
                <HappyClientsWrapper>
                    <InnerWrapper2>

                        <ProfileOuterBox className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50">
                            <Slider {...settings} className="slider">
                                {profileItems.map((SingleItem, index) => <OuterSingleProfile data={SingleItem} key={index} />)}
                            </Slider>
                        </ProfileOuterBox>
                    </InnerWrapper2>
                </HappyClientsWrapper>
            </>
        )
    }
}

export default HappyClientsContent;