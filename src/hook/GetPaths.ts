import { useLocation } from "react-router-dom";

export const GetPath  = (num : number = 1):String => {
  const location = useLocation();

  const paths: String[] = location.pathname.split("/").filter(Boolean);

  const path = paths.slice(0, num).join(' ');

  return path
};
