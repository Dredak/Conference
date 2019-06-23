import styled from 'styled-components';

export const SectionWrapper = styled.div`
flex-basis: 29%;
padding-left:  ${props => props.privacy ? "2rem" : "2.5rem"};
@media all and (max-width: 768px){
flex-basis: 37%;
padding-left: 0px;
}
`;

export const UsefulLinksTitle = styled.h2`
margin-bottom: 2.5em;
white-space: nowrap; 
`;

export const UsefulLinksList = styled.ul`
list-style: none;
color: rgba(255, 255, 255, 0.4);
`;

export const ListItems = styled.li`
padding: 0.5rem 0;
`;