import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import HomeMenu from "@/components/layouts/HomeMenu";
import SectionHeaders from "@/components/layouts/SectionHeaders";


export default function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <HomeMenu/>
        <section className="about my-16">
            <hr className="divide-gray-400 my-8 w-48 mx-auto"/>
            <SectionHeaders main="Our Story" sub="read all about"/>
            <div className="max-w-2xl text-gray-500 mx-auto mt-4 flex flex-col gap-4 text-center">
                <p>
                    <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus dicta enim esse eum ex exercitationem, hic incidunt laborum magnam molestias officia provident quaerat quam, quis, sint temporibus. Accusantium atque beatae cumque et eum impedit in, magni, numquam officiis quia, recusandae repellendus similique voluptates? Commodi consectetur minima nobis saepe sapiente.</strong>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus dicta enim esse eum ex exercitationem, hic incidunt laborum magnam molestias officia provident quaerat quam, quis, sint temporibus. Accusantium atque beatae cumque et eum impedit in, magni, numquam officiis quia, recusandae repellendus similique voluptates? Commodi consectetur minima nobis saepe sapiente.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus dicta enim esse eum ex exercitationem, hic incidunt laborum magnam molestias officia provident quaerat quam, quis, sint temporibus. Accusantium atque beatae cumque et eum impedit in, magni, numquam officiis quia, recusandae repellendus similique voluptates? Commodi consectetur minima nobis saepe sapiente.
                </p>
            </div>
        </section>
        <section className="contact text-center text-gray-500">
            <hr className="divide-gray-400 my-8 w-48 mx-auto"/>
            <SectionHeaders main="Contact us" sub="for any question you have"/>
            <p className="text-6xl">+972 52-333-4444</p>
        </section>
    </>
  );
}
