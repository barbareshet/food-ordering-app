import React from 'react';
import Image from "next/image";
import PizzaImage from "@/components/PizzaImage";
function HomeMenu(props) {
    return (
        <section>
            <div className="h-32 w-32 absolute left-0">
                <Image src="/images/sallad2.png" alt="decor" layout="fill" objectFit="contain"/>
            </div>
            <div className="h-32 w-32 absolute right-0">
                <Image src="/images/sallad1.png" alt="decor" layout="fill" objectFit="contain"/>
            </div>
            <div>
                <h3 className="text-center uppercase text-gray-500 font-semibold leading-4">Check Our</h3>
                <h2 className="text-center font-bold text-primary text-4xl">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <PizzaImage src={'/images/pizza2.png'}/>
                    <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                    <button className="bg-primary text-white px-6 py-2 my-2 rounded-full text-xl">
                        Add to cart <span className="price">$12</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeMenu;