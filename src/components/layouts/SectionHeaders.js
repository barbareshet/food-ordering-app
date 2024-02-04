import React from 'react';

function SectionHeaders({main, sub}) {
    return (
        <>
            <h3 className="text-center uppercase text-gray-500 font-semibold leading-4">{sub}</h3>
            <h2 className="text-center font-bold text-primary text-4xl">{main}</h2>
        </>
    );
}

export default SectionHeaders;