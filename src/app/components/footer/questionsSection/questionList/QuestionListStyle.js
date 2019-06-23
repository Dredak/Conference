import styled from 'styled-components';
import * as colors from '../../../colors';

export const List = styled.ul`
list-style: none;
color: rgba(255, 255, 255, 0.4);
`;

export const ListItem = styled.li`
padding: 0.5rem 0;
color: ${colors.white};
display: flex;
align-items: center;
i {
    margin-right: 20px;
}
:first-child {
    align-items: unset;
    color: rgba(255, 255, 255, 0.7);
    i {
        color:${colors.white};
    }
}
`;

export const ListItemText = styled.span``;