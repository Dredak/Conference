import React from 'react';
import * as OuterSingleProfileStyle from './OuterSingleProfileStyle';

const { OuterSingleProfileWrapper, QuoteOrder, IconElementWrapper,
    IconElement, Descritption, NameOfSpeaker, Occupation } = OuterSingleProfileStyle;



class OuterSingleProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    };

    render() {

        return (
            <>
                <OuterSingleProfileWrapper>
                    <QuoteOrder>
                        <img src={this.props.data.img} alt="" />
                        <IconElementWrapper>
                            <IconElement className="fas fa-quote-left" />
                        </IconElementWrapper>
                    </QuoteOrder>
                    <Descritption>{this.props.data.description}</Descritption>
                    <NameOfSpeaker>{this.props.data.name}</NameOfSpeaker>
                    <Occupation>{this.props.data.occupation}</Occupation>
                </OuterSingleProfileWrapper>
            </>
        )
    }
}

export default OuterSingleProfile;