import styled from 'styled-components';
import * as colors from '../colors';

export const HeaderWrapper = styled.header`
position: absolute;
top: 20px;
left: 0;
right: 0;
z-index: 1;
@media all and (max-width: 992px) {
        top: 0;
        background-color: ${colors.black};
        z-index: 1;
        label {
                display: inline-block;
                
        }
 }
`;
