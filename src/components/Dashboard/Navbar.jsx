import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="">
      {location.pathname}
    </div>
  )
}

export default Navbar
