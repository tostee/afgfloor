import sg from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		await sendEmail(req.body);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: { message: "Internal Server Error." } });
	}
	res.status(204).send("");
}

type TemplateOptions = {
	email: string;
	message: string;
	name: string;
	phone: string;
};

async function sendEmail(options: TemplateOptions): Promise<void> {
	sg.setApiKey(process.env.EMAIL_API_KEY!);
	const msg = {
		to: process.env.EMAIL_TO!,
		from: process.env.EMAIL_SENDER!,
		subject: "I need a Quote!",
		text: text(options),
		html: html(options),
	};
	await sg.send(msg);
}

function text({ email, message, name, phone }: TemplateOptions) {
	return `Hola,

Name:
${name}

Email:
${email}

Phone:
${phone}

Mensaje:
${message}`;
}

function html({ email, message, name, phone }: TemplateOptions) {
	return `<body>Hola,<br><br>

Name:
<p>${name}</p><br>

Email:
<p>${email}</p><br>

Phone:
<p>${phone}</p><br>

Mensaje:
<p>${message}</p></body>`;
}
