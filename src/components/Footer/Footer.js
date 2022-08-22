import React from "react";
import {
  FooterDescription,
  FooterLogo,
  FooterSections,
  FooterSection,
  FooterCompanyDetails,
  FooterSectionLink,
  FooterLink,
  FooterList,
  FooterSectionsTitle,
  FooterLine,
  Copyright,
  LegalLinks,
  LegalLink,
} from "../styles/Footer.styled";
import { Section } from "../styles/Sections.styled";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Section>
      <FooterSection>
        <FooterCompanyDetails>
          <FooterLogo>BeAsT FiTTnEss</FooterLogo>
          <FooterDescription>
            BeAsT FiTTnEss is your new home in boutique wellness. We join the
            dependable standards of Pilates with forefront development to give
            you the most out of each exercise.
          </FooterDescription>
        </FooterCompanyDetails>
        <FooterSections>
          
          <FooterSectionLink>
            <FooterSectionsTitle>Membership</FooterSectionsTitle>
            <FooterList>
              <FooterLink href="#0">Education</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="#0">Member Policies</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="#0">Personal Training</FooterLink>
            </FooterList>
          </FooterSectionLink>
          
        </FooterSections>
      </FooterSection>
      <FooterLine />
      <Copyright>© {year} All Rights Reserved</Copyright>

      <LegalLinks>
        <LegalLink>Privacy Policy</LegalLink>
        <LegalLink>Terms of Use</LegalLink>
        {/* <LegalLink>Corporate Social Responsibility</LegalLink> */}
        {/* <LegalLink>Legal</LegalLink> */}
      </LegalLinks>
    </Section>
  );
};

export default Footer;
