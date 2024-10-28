import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
   
    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Players", path: "/players" },
        { id: 3, name: "Teams", path: "/teams" },
        { id: 4, name: "Auctions", path: "/auctions" },
        { id: 5, name: "Profile", path: "/profile" },
      ];
      const [conditon, setCondition] = useState(true);

      const btnHandeller=()=>{
        setCondition(!conditon);
      }

    return (
        <div className="mb-20">
            <nav className="p-2 bg-gray-700 text-white ">
                <div onClick={btnHandeller} className="text-3xl md:hidden">
                    {
                        conditon?<HiMenuAlt1 className=""/>:<RxCross2 />
                    }
                   
                </div>

                <div className="">
                   <ul className={`duration-500 md:duration-0 md:flex gap-6  absolute md:relative  ${!conditon? "top-20":"-top-[300px]"} md:top-0 md:left-0 w-3/4 md:min-w-full md:justify-center p-2 bg-blue-500 md:bg-gray-700 rounded-xl`}>
                       {navItems.map((item)=> 
                       <a key={item.id} href={item.path}><li className="text-2xl p-2 hover:bg-blue-700">{item.name}</li></a>)
                       }
                   </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;