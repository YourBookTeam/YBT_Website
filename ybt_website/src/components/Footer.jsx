import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FiMapPin, FiMail } from "react-icons/fi";
import Logo from "./Logo.jsx";

const Footer = () => {
  return (
    <footer className="px-5 pt-12 pb-0 flex flex-col text-center">
      <div className="flex flex-wrap">
        {/* Quick Links + Terms */}
        <div className="flex-1 flex flex-col min-w-64 min-h-96 items-center">
          <h3 className="text-3xl mb-8 font-bold">Quick Links</h3>
          <ul className="flex flex-col items-center space-y-2 text-xl">
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="careers">Careers</a>
            </li>
            <li>
              <a href="faq">FAQ</a>
            </li>
          </ul>
          <div className="mt-auto mb-5">
            <a href="terms">Terms of Use and Policies</a>
          </div>
        </div>
        {/* Logo + Social Icons */}
        <div className="flex-1 flex flex-col min-w-64 min-h-96 items-center">
          <Logo className="fill-gold h-60 w-auto" />
          <div className="flex justify-center gap-4 text-2xl mt-auto mb-5">
            <a
              href="https://www.facebook.com/YourBookTeam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/YourBookTeam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/yourbookteam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@your.book.team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@yourbookteam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Contact Info + Copyright */}
        <div className="flex-1 flex flex-col items-center justify-between min-w-64 min-h-96">
          <h3 className="text-3xl font-bold mb-8">Contact Info</h3>
          <div className="flex flex-col items-center">
            <div className="text-lg my-4 flex leading-relaxed">
              <FiMapPin className="text-xl mt-4" />
              <div className="min-w-56 ml-2">
                3214 Silverado Dr
                <br />
                Los Angeles, CA 90039
              </div>
            </div>
            <div className="text-lg my-4 flex leading-relaxed">
              <FiMail className="text-xl mt-1.5" />
              <div className="min-w-56 ml-2">info@yourbookteam.com</div>
            </div>
          </div>
          <div className="flex justify-center mt-auto mb-5">
            Copyright © 2025 YourBookTeam
            <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
