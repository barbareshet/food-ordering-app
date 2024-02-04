import React from 'react';
import Image from "next/image";

function PizzaImage({src="/images/pizza.png", title="pizza"}) {
    return (
        <div className="relative w-32 h-32 text-center mx-auto">
            <Image src={src} alt={title} layout="fill" objectFit="contain"/>
        </div>
    );
}

export default PizzaImage;