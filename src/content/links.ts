import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import emailIcon from "../assets/email.png";

export const cvUrl =
  "https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV.pdf";

export const cvDownloadName = "Mohammed-Bakhshi-CV.pdf";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-bakhshi/", icon: linkedinIcon },
  { label: "GitHub", href: "https://github.com/Mohammed-Bakhshi", icon: githubIcon },
  { label: "Email", href: "mailto:mohammedbakhshi@hotmail.com", icon: emailIcon },
] as const;
