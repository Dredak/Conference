import React from 'react';
import * as SingleDayStyle from './SingleDayStyle';
import WOW from 'wowjs';

const { SingleDayBox, UpperDayText, LowerDayText, Triangle } = SingleDayStyle;



class SingleDay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    };
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {


        return (
            <>
                <SingleDayBox className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50" data-wow-delay={`${0 + this.props.index / 10}s`}>
                    <UpperDayText>{this.props.data.day}</UpperDayText>
                    <LowerDayText>{this.props.data.date}</LowerDayText>
                    <Triangle />
                </SingleDayBox>
            </>
        )
    }
};
export default SingleDay;