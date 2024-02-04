import React from 'react';
import PizzaImage from "@/components/PizzaImage";

function MenuItem({img="/images/pizza2.png", title="Pepperoni", price=12}) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg text-center hover:bg-white hover:shadow transition-all">
            <PizzaImage src={img}/>
            <h4 className="font-semibold my-2 capitalize">{title}</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <button className="bg-primary text-white px-6 py-2 my-2 rounded-full text-xl">
                Add to cart <span className="price">${price}</span>
            </button>
        </div>
    );
}

export default MenuItem;