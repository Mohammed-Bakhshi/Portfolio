import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import emailIcon from "../assets/email.png";

export const cvUrl =
  "https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV.pdf";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-bakhshi/", icon: linkedinIcon },
  { label: "GitHub", href: "https://github.com/Mohammed-Bakhshi", icon: githubIcon },
  { label: "Facebook", href: "https://www.facebook.com/mohammed.bakhshi/", icon: facebookIcon },
  { label: "Instagram", href: "https://instagram.com/mohammedbakhshi/", icon: instagramIcon },
  { label: "Email", href: "mailto:mohammedbakhshi@hotmail.com", icon: emailIcon },
] as const;
