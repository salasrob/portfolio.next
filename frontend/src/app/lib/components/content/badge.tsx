import { BadgeProps } from "../content/types";

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <li className="mr-1.5 mt-2">
        <div className="flex items-center rounded-full bg-od-400/10 px-3 py-1 text-xs font-medium leading-5 text-od-400 ">
            {label}
        </div>
    </li>
  );
};
  
export default Badge;