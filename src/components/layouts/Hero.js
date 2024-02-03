import React from 'react';
import Image from "next/image";
import RightArrow from "@/components/icons/RightArrow";
function Hero() {
    return (
        <section className="hero">
            <div className="py-12 hero-text">
                <h1 className="text-4xl font-semibold">Life is better with <span className="text-primary">Pizza</span></h1>
                <p className="my-4 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda commodi eos, in sint voluptatem.</p>
                <div className="flex gap-4 items-center text-sm">
                    <button className="bg-primary text-white px-8 py-2 rounded-full flex items-center gap-2 capitalize">
                        Order Now
                        <RightArrow/>
                    </button>
                    <button className="px-8 py-2 rounded-full flex items-center gap-2 text-gray-500 border-2">
                        Learn More
                        <RightArrow/>
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src="/images/pizza.png" layout="fill" alt="pizza" objectFit="contain"/>
            </div>
        </section>
    );
}

export default Hero;