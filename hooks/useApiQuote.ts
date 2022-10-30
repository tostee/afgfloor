import axios from "axios";
import { useState } from "react";

type SendQuoteOptions = {
	name: string;
	email: string;
	phone: string;
	message: string;
	onSuccess?: () => void;
	onError?: (error: unknown) => void;
};

export default function useApiQuote() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>();

	const sendQuote = async ({
		name,
		email,
		phone,
		message,
		onSuccess,
		onError,
	}: SendQuoteOptions) => {
		try {
			setLoading(true);
			setError(null);
			await axios.post("/api/get-quote", { name, email, phone, message });
			onSuccess?.();
		} catch (err) {
			setError(err);
			onError?.(err);
		} finally {
			setLoading(false);
		}
	};

	return {
		error,
		isLoading: loading,
		sendQuote: (data: SendQuoteOptions) => {
			sendQuote(data);
		},
	};
}
