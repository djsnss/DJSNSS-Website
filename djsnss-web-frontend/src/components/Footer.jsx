// Import necessary libraries and components
import React from "react";
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
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
    case "linkedin":
      return BsLinkedin;
    default:
      return null;
  }
};

// Main Component function
export function Component() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid bg-gray-200 text-black w-full grid-cols-2 gap-8 pl-4 sm:pl-14 py-6 md:grid-cols-3">
          {/* Company Section */}
          <div>
            <FooterTitle className="text-sm sm:text-md md:text-lg pb-3" title="Useful Links" />
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
            <FooterTitle className="text-sm sm:text-md md:text-lg pb-3" title="Help Center" />
            <FooterLinkGroup col>
              <FooterLink href="/error">Discord Server</FooterLink>
              <FooterLink href="https://x.com/NSS_DJSCE">Twitter</FooterLink>
              <FooterLink href="https://www.facebook.com/share/tbpuL3mtrdtD7iwD/?mibextid=qi2Omg">Facebook</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          
          {/* Legal Section */}
          <div>
            <FooterTitle className="text-sm sm:text-md md:text-lg pb-3" title="Legal" />
            <FooterLinkGroup col>
              <FooterLink href="/volunteer-policy">Volunteer Policy</FooterLink>
              <FooterLink href="/license">Licensing</FooterLink>
            </FooterLinkGroup>
          </div>
          
          {/* Download Section */}
          {/* <div>
            <FooterTitle className="text-sm sm:text-md md:text-lg pb-3" title="Download" />
            <FooterLinkGroup col>
              <FooterLink href="#">iOS</FooterLink>
              <FooterLink href="#">Android</FooterLink>
              <FooterLink href="#">Windows</FooterLink>
              <FooterLink href="#">MacOS</FooterLink>
            </FooterLinkGroup>
          </div> */}
        </div>
        
        {/* Footer Bottom Section */}
        <div className="w-full flex-col sm:flex-row bg-gray-200 text-black px-4 sm:px-10 pb-6 flex items-center justify-between">
          <FooterCopyright href="/" by="DJSNSS™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {SocialLinks.map((social) => {
              const IconComponent = getIcon(social.name);
              return IconComponent ? 
              <a href={social.link} target="_blank" key={social.id} className=" hover:text-blue-500">
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
