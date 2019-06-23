import React from 'react';
import * as SingleCardStyle from './SingleCardStyle';
import WOW from 'wowjs';

const { SingleCardWrapper, PicWrapper, TextWrapper, TimeWrapper, AnchorWrapper, ParagraphWrapper, HeaderWrapper,
    SpeakersName } = SingleCardStyle;

class SingleCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    };

    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {

        return (
            <>
                <SingleCardWrapper className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50">
                    <PicWrapper><img src={this.props.data.profileImg} alt="profile_pic.." /></PicWrapper>
                    <TextWrapper>
                        <TimeWrapper>{this.props.data.time}</TimeWrapper>
                        <AnchorWrapper href="#">{this.props.data.themeTitle}</AnchorWrapper>
                        <ParagraphWrapper>{this.props.data.description}
                        </ParagraphWrapper>
                        <HeaderWrapper><SpeakersName href="#">- {this.props.data.name}</SpeakersName> {this.props.data.occupation}</HeaderWrapper>

                    </TextWrapper>
                </SingleCardWrapper>
            </>
        )
    }
};

export default SingleCard;