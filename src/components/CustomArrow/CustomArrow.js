import React from "react";

export const CustomArrow = ({className, style, onClick, customArrowClassList}) => {
    const arrowClassNames = `${className} ${customArrowClassList}`
    return (
        <div
            className={arrowClassNames}
            style={{...style}}
            onClick={onClick}
        />
    );
}