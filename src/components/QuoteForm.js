import FormInput from "./FormInput";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const QuoteForm = ({ onComplete, onClose, modalState }) => {
	const [iname, setIname] = useState("");
	const [iphone, setIphone] = useState("");
	const [imail, setImail] = useState("");
	const [idescription, setIdescription] = useState("");
	const form = useRef();

	const handleName = (e) => {
		setIname(e.target.value);
		console.log(iname);
	};
	const handlePhone = (e) => {
		setIphone(e.target.value);
	};
	const handleMail = (e) => {
		setImail(e.target.value);
	};
	const handleDescription = (e) => {
		setIdescription(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const sendForm = {
			to_name: "AFGFLOOR",
			message: idescription,
			reply_to: imail,
			from_phone: iphone,
			email: imail,
			from_name: iname,
		};
		console.log(form.current);
		emailjs
			.sendForm(
				"service_5owu39c",
				"template_ds0nmqk",
				form.current,
				"ZWgf0gTKLfDl823G-"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		/*const quote = {
			name: iname,
			phone: iphone,
			email: imail,
			description: idescription,
		};*/

		console.log(iname, imail, idescription, iphone);
		setImail("");
		setIname("");
		setIdescription("");
		setIphone("");
		onClose(true);
	};

	return (
		<form ref={form} className="space-y-6 z-50" onSubmit={handleSubmit}>
			<div>
				<label
					for="name"
					className="block mb-1 text-sm font-medium text-primary"
				>
					Your Name
				</label>
				<FormInput
					name="user_name"
					id="user_name"
					classname=""
					placeholder="Name"
					required="true"
					value={iname}
					onText={(e) => {
						handleName(e);
					}}
				/>
			</div>
			<div>
				<label
					for="name"
					className="block mb-1 text-sm font-medium text-primary"
				>
					Phone Number
				</label>
				<FormInput
					name="user_phone"
					id="user_phone"
					classname=""
					placeholder="Phone number"
					required="true"
					value={iphone}
					onText={(e) => {
						handlePhone(e);
					}}
				/>
			</div>
			<div>
				<label
					for="email"
					className="block mb-1 text-sm font-medium text-primary"
				>
					Your email
				</label>
				<FormInput
					name="user_email"
					id="user_email"
					classname=""
					placeholder="name@company.com"
					required="true"
					value={imail}
					onText={(e) => {
						handleMail(e);
					}}
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
					name="user_message"
					id="user_message"
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
                        
						rounded-lg
						
                        "
					value={idescription}
					onChange={(e) => handleDescription(e)}
				></textarea>
			</div>

			<div className="grid grid-cols-5">
				<button
					type="submit"
					className="col-start-4 col-span-2 w-auto text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-links "
				>
					Send Message
				</button>
			</div>
		</form>
	);
};
export default QuoteForm;
