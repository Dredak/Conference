import React from 'react';
import { SectionWrapper, PricingTablesContentWrapper } from './PricingTablesStyle';
import { SectionTitle } from '..';
import SectionContent from './sectionContent/SectionContent';

const PricingTables = () => {
    return (
        <SectionWrapper>
            <PricingTablesContentWrapper>
                <SectionTitle subTitle="Pricing Tables" mainTitleLight="Our" mainTitle="Ticket Pricing" />
                <SectionContent />
            </PricingTablesContentWrapper>
        </SectionWrapper>
    );
}

export default PricingTables;