import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";
const Navbar = () =>{
    return (<nav class="bg-white border-gray-200 px-2 font-quicksand sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
        <img src="/assets/images/logo.png" className=" h-9 w-9 sm:h-9" alt="Afgfloor" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AFGfloor</span>
    </a>
    <div class="flex md:order-2">
        
        <ModalForm className="text-white bg-amber-900 hover:bg-amber-800 focus:ring-4 focus:outline-none self-start focus:ring-amber-300 font-medium rounded-lg text-sm px-1 py-1 text-center mr-3 md:mr-0 dark:bg-amber-900 dark:hover:bg-amber-800 dark:focus:ring-amber-800" name = "Get quote"/>
        <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
        
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
 
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li className="flex flex-row align-middle">
      <Link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>  </Link>
      <Link
      to="/"
      aria-current="page"
      class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white" >Home
      
      </Link>
      
      </li>
      
      <li>
      <Link
      to="/about"
      aria-current="page" 
      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About
      </Link>
      </li>
      <li>
      <Link
      to="/services"
      aria-current="page" 
      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services
      </Link>
      </li>
      <li>
      <Link
      to="/gallery"
      aria-current="page" 
      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery
      </Link>
      </li>
     <li>
      <Link
      to="/contact"
      aria-current="page" 
      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact
      </Link>
			</li>
            
    </ul>
    
  </div>
  
  </div>
</nav>

)
}
export default Navbar
