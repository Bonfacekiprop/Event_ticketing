//styles the home page regester page
import styled from 'styled-components';
import {Link as RouterLink} from 'react-dom';

export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#3F4F6",
    light2: "#ESE7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#DC2626",
    red: "#DC2626"

}
export const StyledTitle =  styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.colors ? props.colors: colors.primary }
    padding: 5px;
    margin-bottom: 25px;`;
export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.colors ? props.colors: colors.primary }
    padding: 5px;
    margin-bottom: 25px;

`;
export const  Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;
export const StyledButton = styled(RouterLink)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    outline: 0;
    text-decoration:  none;
    text-align: center;
    transition: ease-in-out 0.3s;
    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }

`;
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;