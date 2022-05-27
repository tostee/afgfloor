const ModalForm = ({ className, name }) => {
	const targetEl = document.getElementById("authentication-modal");

	// options with default values
	const options = {
		placement: "bottom-right",
		backdropClasses: "bg-gray-900 bg-opacity-80 fixed inset-0",
		onHide: () => {
			console.log("modal is hidden");
		},
		onShow: () => {
			console.log("modal is shown");
		},
		onToggle: () => {
			console.log("modal has been toggled");
		},
	};

	const Modal = (targetEl, options) => {
		this.targetEl = targetEl;
		this.options = options;
	};

	const showmodal = () => {
		const modal = new Modal(targetEl, options);
		modal.show();
	};

	/*
	 * targetEl: required
	 * options: optional
	 */

	return (
		<div className="mt-1">
			<button
				onClick={() => showmodal()}
				className={`${className}`}
				type="button"
				data-modal-toggle="authentication-modal"
			>
				{name}
			</button>

			<div
				id="authentication-modal"
				tabindex="-1"
				aria-hidden="true"
				className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
			>
				<div className="relative p-4 w-full max-w-md h-full md:h-auto">
					<div className="relative rounded-lg shadow bg-gray-100">
						<button
							type="button"
							className="absolute top-3 right-2.5 text-primary bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
							data-modal-toggle="authentication-modal"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
						<div className="py-6 px-6 lg:px-8">
							<h3 className="mb-4 text-xl font-medium  text-primary">
								Get quote
							</h3>
							<form className="space-y-6" action="#">
								<div>
									<label
										for="name"
										className="block mb-1 text-sm font-medium text-primary"
									>
										Your Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className=" border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-600 border-primary placeholder-gray-400 text-primary outline-none"
										placeholder="Name"
										required
									/>
								</div>
								<div>
									<label
										for="name"
										className="block mb-1 text-sm font-medium text-primary"
									>
										Phone Number
									</label>
									<input
										type="phone"
										name="phone"
										id="phone"
										className="border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-primary resize-none
									    outline-none
                        				"
										placeholder="Phone number"
										required
									/>
								</div>
								<div>
									<label
										for="email"
										className="block mb-1 text-sm font-medium text-primary"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="border text-sm outline-none rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-primary"
										placeholder="name@company.com"
										required
									/>
								</div>

								<div>
									<label
										for="email"
										className="block mb-1 text-sm font-medium text-primary "
									>
										How can we help you?
									</label>
									<textarea
										rows="3"
										placeholder="I was wondering about availability and rates. I need help whith the following:"
										className="
                        w-full
                        py-3
                        px-[14px]
                        text-primary
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        bg-gray-600
						rounded-lg
						focus:ring-primary
						focus:border-primary
                        "
									></textarea>
								</div>

								<div className="grid grid-cols-5">
									<button
										type="submit"
										className="col-start-4 col-span-2 w-auto text-primary focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secundary hover:bg-secundary focus:ring-secundary"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ModalForm;
