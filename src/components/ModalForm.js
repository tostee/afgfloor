import QuoteForm from "./QuoteForm";
import React, { useState } from "react";
const ModalForm = ({ className, name, visible = false, onChange }) => {
	function modalHandler(toogle) {
		onChange(toogle);
	}
	const clearForm = (e) => {};

	const onComplete = () => {};
	return (
		<div>
			<div
				className={`${
					visible ? "show" : "hidden"
				} p-4 z-10 top-0 left-0 w-full h-full fixed grid place-items-center bg-black bg-opacity-60`}
				id="modal"
			>
				<div className="w-full max-w-lg relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
					<div className="relative rounded-lg shadow bg-gray-100">
						<button
							type="button"
							className="absolute top-3 right-2.5 text-primary bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
							data-modal-toggle="authentication-modal"
							onClick={() => modalHandler(false)}
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
						<div className="py-6 px-6 lg:px-8">
							<h3 className="mb-4 text-xl font-medium  text-primary">
								Get quote
							</h3>
							<QuoteForm onClose={clearForm} modalState={visible} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ModalForm;
