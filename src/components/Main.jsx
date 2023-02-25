import React from "react";
import Service from "./Service";
import Business from "./Business";
import Input from "./Input";
import "./Main.css"

const servicesImagesUrl = [
  {
    image: "src/assets/design.png",
    title: "UI/UX Design",
  },
  {
    image: "src/assets/frontend.png",
    title: "Frontend",
  },
  {
    image: "src/assets/backend.png",
    title: "Backend",
  },
];

const businessImagesUrl = [
  {
    image: "src/assets/smarthome.jpg",
    title: "Smart home dashboard",
    subtitle: "Full stack application",
  },
  {
    image: "src/assets/onboard.png",
    title: "Onboard application",
    subtitle: "UX/UI design",
  },
  {
    image: "src/assets/booking.png",
    title: "Bookin system",
    subtitle: "Mobile application",
  },
  {
    image: "src/assets/juice-product.png",
    title: "Juice product homepage",
    subtitle: "Front End application",
  },
];

export default function Main() {
  return (
    <main className="container mx-auto px-16 my-8">
      <section className="info my-5 ">
        <div className="container mx-auto px-20 font-poppins flex flex-col gap-6">
          <p className="text-[#2D9CDB] text-lg">Unhappy with your website?</p>
          <h1 className="text-5xl text-[#333333] font-medium">We create beautiful <br /> and fast web services</h1>
          <img src="src/assets/heroImage.jpg" alt="" className="" style={{width: "100%!important"}}/>
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl text-[#333333] font-medium">Story, emotion <br /> and purpose</h1>
            <p>We help transform your ideas into real <br /> world applications that will outperform <br /> your toughest competition and help you <br />achieve your stategic goals in short <br />period of time.</p>
            <div className="flex flex-col gap-2 w-80">
              <p>Want us to contact you?</p>
              <Input />
            </div>
          </div>
        </div>
      </section>
      <section className="services my-5">
        <h2 className="font-poppins font-medium text-4xl">
          We offer high <br /> demand services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {servicesImagesUrl.map((service) => (
            <Service image={service.image} title={service.title} />
          ))}
        </div>
      </section>
      <section className="business my-5">
        <h2 className="font-poppins font-medium text-4xl">
          Good design meas <br /> good business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 mx-auto">
          {businessImagesUrl.map((business) => (
            <Business
              image={business.image}
              title={business.title}
              subtitle={business.subtitle}
            />
          ))}
        </div>
        <div className="flex max-sm:justify-start justify-end ">
          <button className="font-poppins bg-transparent text-[#2D9CDB] rounded-md px-3 py-2 hover:bg-sky-500 hover:text-white	">
            See more →
          </button>
        </div>
      </section>
      <section className="teams my-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center font-poppins">
            <h3 className="text-[#EB5757] text-lg font-medium">Meet the team</h3>
            <h2 className="font-medium text-4xl text-[#333333] my-5">
              We are chilled <br /> and a laidback <br /> team
            </h2>
            <p className="text-[#4F4F4F] font-normal">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex row-span-2 items-center justify-center">
              <img className="rounded-3xl" src="src/assets/person3.png" alt="" />
            </div>
            <div>
              <img className="rounded-3xl" src="src/assets/person1.png" alt="" />
            </div>
            <div>
              <img className="rounded-3xl" src="src/assets/person2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="my-32 font-poppins">
          <p className="text-4xl font-medium w-4/5">
            "Fast and outstanding results. Edie understands their customer's needs. They have a young and taletend team."
          </p>
          <div className="flex my-10 ">
            <img src="src/assets/person4.png" alt="" className="w-20 rounded-xl	"/>
            <div className="flex flex-col ml-7 justify-between py-1">
              <h3 className="font-medium text-2xl text-[#333333]">Carlos Tran</h3>
              <p className="text-[#828282] text-lg font-normal">The Decorate Gatsby</p>
            </div>  
          </div>
        </div>
      </section>
    </main>
  );
}
