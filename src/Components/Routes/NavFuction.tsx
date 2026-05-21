import { ChevronRightIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const NavFunction = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get path segments
  const paths : String[] = location.pathname.split('/').filter(Boolean);
  
  const handleNavigate = (index: number) => {
    // Build path up to this segment
    const path = '/' + paths.slice(0, index + 1).join('/');
    navigate(path);
  };
  
  return (
    <div className="flex items-center text-white">
      {paths.map((segment, index) => (
        <span key={index} className="flex items-center">
          <span
            onClick={() => handleNavigate(index)}
            className={`
              cursor-pointer hover:text-yellow transition-colors
              ${index === paths.length - 1 ? 'font-semibold text-text' : 'text-gray-400'}
            `}
          >
            {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitalize */}
          </span>
          {index < paths.length - 1 && (
            <ChevronRightIcon size={16} className="mx-1 text-text" />
          )}
        </span>
      ))}
    </div>
  );
};

export default NavFunction;