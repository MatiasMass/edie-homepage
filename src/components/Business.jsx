import React from "react";

function Business({ image, title, subtitle }) {
  return (
    <div className="odd:mt-36">
      <img src={image} alt="" className="rounded-xl" />
      <p className="font-poppins font-light text-sm my-5 text-[#828282]">
        {subtitle}
      </p>
      <h3 className="font-poppins font-medium text-2xl text-[#333333]">
        {title}
      </h3>
    </div>
  );
}

export default Business;
