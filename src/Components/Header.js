import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import metro from './image/metro.jpg';
import cityimage from './image/city.jpeg';
import ladyimage from './image/lady.jpg';



function Header() {
  return (
    <div className="Header ">
      <ul className="flex justify-center h-100 bg-gradient-to-r from-violet-500 to-fuchsia-800 sticky top-0">
        <FontAwesomeIcon icon={faPenNib} className="flex left-2 h-12 w-12  gap-15 text-gray-800 hover:text-purple-500 cursor-pointer "></FontAwesomeIcon>
        <li className=" justify-end mx-6 my-6 gap-15 text-gray-900  text-bold hover:text-blue-900 cursor-pointer ">Home</li>
        <li className=" justify-end mx-6 my-6 gap-15 text-gray-900 text-bold hover:text-indigo-900 cursor-pointer">New</li>
        <li className=" justify-end mx-6 my-6 gap-15 text-gray-900 text-bold hover:text-indigo-900 cursor-pointer">Popular</li>
        <li className=" justify-end mx-6 my-6 gap-15 text-gray-900 text-bold hover:text-indigo-900 cursor-pointer">Trending</li>
        <li className=" justify-end mx-6 my-6 gap-15 text-gray-900 text-bold hover:text-indigo-900 cursor-pointer">Categories</li>
        <li className=" justify-end mx-6 my-6 gap-15 text-gray-900 text-bold hover:text-indigo-900 cursor-pointer">Contact Us</li>

      </ul>

      <div className="grid grid-cols-3 grid-flow-col w-100 gap-4 bg-slate-300 ">
       <div>
         <img src={metro} classname="col-start-1 col-span-1 mt-4" alt="newsimage" />
        </div>
        <div>
        <img src={cityimage} classname=" h-2/4 col-start-1 row-span-1 mt-4" alt="newsimage" />
        </div>
        <div>
        <img src={ladyimage} classname="col-start-1 row-span-1 mt-4" alt="newsimage" />
        </div>
        
      </div>
    </div>
  )
}

export default Header;