import styled from 'styled-components';
import * as color from '../colors';



export const LogisticsSection = styled.section`
       background: ${color.light_grey};

`;

export const LogisticsWrapper = styled.div`
    width: 1110px;
    margin: 0 auto;
    padding: 7% 15px;
    display: flex;
    justify-content: space-between;
    background-color: ${color.light_grey};

    @media all and (max-width:1200px){
        width:930px;
    }
    @media all and (max-width:992px){
        width:690px;
    }

    @media all and (max-width:768px){
        padding: 7%, 15%;
        flex-direction: column;
    }
    @media all and (max-width:576px){
        width: 100%;
    }
   
`;

export const ItemBox = styled.div`
    position:relative;
    width: 25%;
    margin-bottom:40px;
    @media all and (max-width:768px){
        padding-left: 15px;
        padding-right: 15px;
        width: 100%;
    }
`;

// export const CirclePosition = styled.span`

// font-size: 3em;  
// color:${color.light_blue};
// `;

export const BlueCircle = styled.div`
          opacity: 0.16;
          background-color: ${color.light_blue};
          height: 60px;
          width: 60px;
          border-radius: 50%;
          position: absolute;
          top: -10px;
          left:25px;
          `;

export const ItemNames = styled.h3`
          font-size: 20px;
          margin-bottom: 20px;
          margin-top: 4px;
          `;

export const ItemDescription = styled.p`
color: ${color.grey};
font-size: 16px;
`;

export const LogisticsSecondContent = styled.h2`
line-height: 1.5;
font-weight: 400;
font-size: 2rem;
width: 50%;
@media all and (max-width: 768px) {
width: 100%;
}
`;

export const LogisticsWrapperSecond = styled(LogisticsWrapper)`
display: flex;
justify-content: flex-end;
`;
