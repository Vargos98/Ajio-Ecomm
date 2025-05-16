// components/Footer.jsx

import React from 'react';
import { FOOTER_LINKS } from "../assets/data";
import FOOTER_CONTACT_INFO from '../assets/footer_contact';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pb-24 pt-20 bg-white text-black">
      <div className="container mx-auto px-4 flex flex-col gap-14">
        
        {/* Top Section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          
          {/* Logo */}
          <div className="w-full md:w-1/4">
            <Link to="/" className="text-2xl font-bold block">Shoppee</Link>
          </div>
          
          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            
            {/* Static Links */}
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="space-y-1">
                  {col.links.map((link, index) => (
                    <li key={index}>
                      <Link to="/" className="hover:underline">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            
            {/* Contact Info */}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="space-y-2">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-medium">{link.label}:</span>
                      <span>{link.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </FooterColumn>

          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200" />

        {/* Bottom Note */}
        <p className="text-center text-sm text-gray-500">
          © 2025 Shoppee | All rights reserved.
        </p>

      </div>
    </footer>
  );
};

// FooterColumn component
const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-lg font-semibold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
