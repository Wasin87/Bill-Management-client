import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="   bg-linear-to-r from-amber-500 to-amber-200 dark:from-gray-700 dark:to-amber-900 text-black dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        
        {/* Logo & Brand */}
        <aside className="flex flex-col items-start gap-3">
          <img
            className="w-16 h-16 border border-b-amber-800 rounded-4xl bg-amber-100 p-1 dark:bg-gray-700"
            src={logo}
            alt="Bill Pie Logo"
          />
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Bill <span className="text-amber-800 dark:text-amber-400">Pie</span>
            </h1>
            <p className="text-sm text-gray-800 dark:text-gray-300">
              Bill Management System
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </aside>

         
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {/* Services */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title font-semibold text-lg mb-2">Services</h6>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Branding</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Design</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Marketing</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Advertisement</a>
          </nav>

          {/* Company */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title font-semibold text-lg mb-2">Company</h6>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">About us</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Contact</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Jobs</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Press kit</a>
          </nav>

          {/* Legal */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title font-semibold text-lg mb-2">Legal</h6>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Terms of use</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Privacy policy</a>
            <a href="#" className="link link-hover text-sm hover:text-amber-700">Cookie policy</a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 dark:border-gray-600 mb-5  pt-4 text-center text-sm text-gray-700 dark:text-gray-200">
        &copy; {new Date().getFullYear()} - All rights reserved by <span className="font-semibold">Bill Pie Industries Ltd</span>
      </div>
    </footer>
  );
};

export default Footer;
