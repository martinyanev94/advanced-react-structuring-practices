npm install styled-components
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => (props.primary ? 'blue' : 'gray')};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;
