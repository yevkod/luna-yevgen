import React from "react";

export const getWindowTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};


export const valueRenderer = (value:any) => {
    if (Array.isArray(value)) {
        return (
            <>
                {value?.map((v, i) => (
                    <span key={i}>
                            <div>
                                Source:
                                {v.Source}
        </div>
        <div>
        Value:
            {v.Value}
        </div>
        </span>
                ))}
            </>
        );
    }
    return (
        <>
            {value}
        </>);
};
