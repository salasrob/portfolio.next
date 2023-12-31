import Link from "next/link";
import { NavButtonProps } from "./types";

const linkStyle = {
    marginRight: '20px'
  };

const NavButton: React.FC<NavButtonProps> = ({ title, url }) => {
  return (
    <Link style={linkStyle} href={url}>{title}</Link>
  );
};
  
export default NavButton;