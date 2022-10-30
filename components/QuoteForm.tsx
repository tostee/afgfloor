import { useRef, useState } from "react";
import useApiQuote from "../hooks/useApiQuote";
import FormInput from "./FormInput";

const QuoteForm = ({ onClose }: any) => {
	const form = useRef<HTMLFormElement>(null);

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const { isLoading, error, sendQuote } = useApiQuote();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		sendQuote({
			name,
			phone,
			email,
			message,
			onSuccess: () => {
				setMessage(""); // form does not reset textarea somehow 🤷🏻‍♂️
				form.current?.reset();
				onClose?.();
			},
		});
	};

	return (
		<form
			ref={form}
			className={`flex flex-col gap-4 ${
				isLoading ? "pointer-events-none opacity-50" : ""
			}`}
			onSubmit={handleSubmit}
		>
			<div>
				<label
					htmlFor="form-name"
					className="block text-sm font-medium text-primary"
				>
					Name
				</label>

				<FormInput
					required
					autoFocus
					id="form-name"
					defaultValue={name}
					placeholder="John Doe"
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label
					htmlFor="form-phone"
					className="block mb-1 text-sm font-medium text-primary"
				>
					Phone Number
				</label>
				<FormInput
					required
					defaultValue={phone}
					id="form-phone"
					placeholder="+1234567890"
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>

			<div>
				<label
					htmlFor="form-email"
					className="block mb-1 text-sm font-medium text-primary"
				>
					Email address
				</label>
				<FormInput
					required
					defaultValue={email}
					id="form-email"
					placeholder="john.doe@mail.com"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label
					htmlFor="form-message"
					className="block mb-1 text-sm font-medium text-primary "
				>
					How can we help you?
				</label>

				<textarea
					id="form-message"
					defaultValue={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="I am wondering about availability and prices..."
					className="w-full py-1 px-[10px] text-secundary border border-[f0f0f0]
					outline-none focus-visible:shadow-none rounded-lg min-h-[80px] max-h-[320px]"
				></textarea>
			</div>

			{!!error && <div className="text-error">Oops! Something went wrong.</div>}

			<button
				type="submit"
				className="col-start-1 col-span-5 w-auto text-white focus:ring-4 focus:outline-none
					font-medium rounded-lg text-sm md:text-base px-5 py-2.5 text-center bg-links "
			>
				{!isLoading && <span>Send Message</span>}
				{isLoading && <span>Sending...</span>}
			</button>
		</form>
	);
};
export default QuoteForm;
