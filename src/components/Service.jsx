import React from "react";

function Service({ image, title }) {
  return (
    <div className="hover:rounded-3xl px-6 py-14 hover:cursor-pointer hover:shadow-[0_0px_30px_rgba(0,0,0,0.1)] ">
      <div className="image">
        <img src={image} alt={title} className="max-w-none object-cover w-16" />
      </div>
      <div className="title my-5">
        <h3 className="font-poppins text-2xl font-bold">{title}</h3>
        <p className="font-poppins font-normal my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ex
          labore excepturi voluptatem architecto sunt eius adipisci, minima
          consectetur ad!
        </p>
        <button className="font-poppins bg-myBackgroundColor text-[#828282] rounded-md px-3 py-2 hover:bg-sky-500 hover:text-white	">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Service;
