import ModalForm from "./ModalForm";


const Header = () => {
	return (
		<div
				className={`border-green-600 border-y-2 h-96 bg-blend-darken bg-zinc-400 grid place-items-center relative overflow-hidden bg-no-repeat bg-cover`}
			 style={{backgroundImage:"url(/assets/images/default.jpeg)"}}>
				<div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
    >
		
      <div class="flex justify-start items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-3xl font-bold mt-0 mb-6">AFG Floor Experts INC</h1>
          <h3 class="text-xl mb-4">Your comfort is our priority</h3>
          <ModalForm className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded dark:bg-amber-900 dark:hover:bg-amber-800 dark:focus:ring-amber-900 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" name = "Get quote"/>
        </div>
      </div>
    </div>
			</div>
	);
};

export default Header;
