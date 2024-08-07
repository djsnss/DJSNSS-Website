// Import necessary libraries and components
import React from "react";
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { MenuLinks, SocialLinks } from "../data/index"; // Assuming the data is in data.js

const getIcon = (name) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return BsFacebook;
    case "instagram":
      return BsInstagram;
    case "twitter":
      return BsTwitter;
    case "github":
      return BsGithub;
    case "dribbble":
      return BsDribbble;
    default:
      return null;
  }
};

// Main Component function
export function Component() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid bg-gray-700 text-white w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          {/* Company Section */}
          <div>
            <FooterTitle className="text-lg pb-4" title="Useful Links" />
            <FooterLinkGroup col>
              {MenuLinks.map((link) => (
                <FooterLink key={link.id} href={`/${link.link}`}>
                  {link.name}
                </FooterLink>
              ))}
            </FooterLinkGroup>
          </div>
          
          {/* Help Center Section */}
          <div>
            <FooterTitle className="text-lg pb-4" title="Help Center" />
            <FooterLinkGroup col>
              <FooterLink href="#">Discord Server</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          
          {/* Legal Section */}
          <div>
            <FooterTitle className="text-lg pb-4" title="Legal" />
            <FooterLinkGroup col>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          
          {/* Download Section */}
          <div>
            <FooterTitle className="text-lg pb-4" title="Download" />
            <FooterLinkGroup col>
              <FooterLink href="#">iOS</FooterLink>
              <FooterLink href="#">Android</FooterLink>
              <FooterLink href="#">Windows</FooterLink>
              <FooterLink href="#">MacOS</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="w-full bg-gray-700 text-white px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="DJSNSS™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {SocialLinks.map((social) => {
              const IconComponent = getIcon(social.name);
              return IconComponent ? 
              <a href={social.link} target="_blank" key={social.id}>
                <FooterIcon key={social.id} icon={IconComponent} />
              </a> : null;
            })}
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
