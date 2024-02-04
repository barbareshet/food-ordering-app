import React from 'react';
import Image from "next/image";
import MenuItem from "@/components/items/MenuItem";
import SectionHeaders from "@/components/layouts/SectionHeaders";
function HomeMenu(props) {
    return (
        <section>
            <div className="h-32 w-32 absolute left-0">
                <Image src="/images/sallad2.png" alt="decor" layout="fill" objectFit="contain"/>
            </div>
            <div className="h-32 w-32 absolute right-0">
                <Image src="/images/sallad1.png" alt="decor" layout="fill" objectFit="contain"/>
            </div>
            <div className="home-menu-title my-4 items-center">
                <SectionHeaders main="Menu" sub="Check Out Our"/>
            </div>
            <div className="grid grid-cols-3 gap-8 mb-4">
                <MenuItem img={'/images/pizza3.png'} title="mixed pizza"/>
                <MenuItem img={'/images/pizza4.png'}/>
                <MenuItem title="margarita"/>
                <MenuItem price={14}/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </section>
    );
}

export default HomeMenu;