import React from 'react';
import { SectionTitle } from '../index';
import * as HappyClientsStyle from '../happy_clients/HappyClientsStyle';
import HappyClientsContent from './happy_clients_content/HappyClientsContent';


const { HappyClientsSection } = HappyClientsStyle;

class HappyClients extends React.Component {
    constructor() {
        super()
        this.state = {};
    };

    render() {
        return (
            <>
                <HappyClientsSection>
                    <SectionTitle subTitle="Testimonials" mainTitleLight="Happy" mainTitle="Clients" />
                    <HappyClientsContent />
                </HappyClientsSection>
            </>
        )
    }
}

export default HappyClients;