import React from 'react';
import StyledButton from './StyledButton'; // Assuming the styled button is in StyledButton.js

const App = () => {
    return (
        <div>
            <h1>Hello Styled Components!</h1>
            <StyledButton primary>Primary Button</StyledButton>
            <StyledButton>Default Button</StyledButton>
        </div>
    );
};

export default App;
