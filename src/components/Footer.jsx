import React from "react";
import Input from "./Input";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 font-poppins container mx-auto p-16 bg-[#100E1D]">
      <div className="">
        <ul className="text-white">
          <li>
            <a href="#" className="cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Our Works
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Clients
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-heebo text-white text-4xl font-bold">Edie</h2>
        <div className="flex gap-1">
          <a href="#">
            <FacebookIcon style={{ color: "white" }} />
          </a>
          <a href="#">
            <InstagramIcon style={{ color: "white" }} />
          </a>
          <a href="#">
            <TwitterIcon style={{ color: "white" }} />
          </a>
          <a href="#">
            <LinkedInIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
      <div>
        <p className="text-[#F2F2F2] mb-2">Want us to contact you?</p>
        <Input />
      </div>
    </footer>
  );
}

export default Footer;
