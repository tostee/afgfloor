import ReactDOM from "react-dom";
import QuoteForm from "./QuoteForm";

type ModalFormProps = {
	visible?: boolean;
	onChange?: (toggle: boolean) => void;
};

const ModalForm = ({ visible = false, onChange }: ModalFormProps) => {
	const Content = () => (
		<div
			className={`${
				visible ? "show" : "hidden"
			} p-4 z-50 top-0 left-0 w-full h-full fixed grid place-items-center bg-black bg-opacity-80`}
		>
			<div className="w-full max-w-sm shadow-md rounded-lg bg-gray-100 relative">
				<button
					type="button"
					className="absolute top-3 right-2.5 text-primary bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
					onClick={() => onChange?.(false)}
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

				<div className="py-6 px-6 md:px-8">
					<h3 className="mb-4 text-xl font-medium  text-primary">Get quote</h3>

					<QuoteForm onClose={() => onChange?.(false)} />
				</div>
			</div>
		</div>
	);

	if (typeof window === "undefined") return <Content />;

	/// create element inside the body instead of the app root
	return ReactDOM.createPortal(<Content />, document.body);
};
export default ModalForm;
