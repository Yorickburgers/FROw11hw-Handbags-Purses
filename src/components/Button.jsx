import React from 'react';

function Button({functionText, disabled}) {
    function logButton(text) {
        console.log(text);
    }

    if (disabled === true) {
        return (
            <button type="button" onClick={() => logButton(functionText)} disabled>{functionText}</button>
        );
    } else if (disabled === false) {
        return (
            <button type="button" onClick={() => logButton(functionText)}>{functionText}</button>
        );
    }
}

export default Button;