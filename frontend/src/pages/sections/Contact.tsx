import React, { Fragment, useState } from "react";

// Plugins
import axios from "axios";
import emailjs from 'emailjs-com';
// ----------------

type formDataType = {
	"your-name": string;
	"your-email": string;
	"your-subject": string;
	"your-message": string;
};
const initialFormData = {
	"your-name": "",
	"your-email": "",
	"your-subject": "",
	"your-message": "",
};

// to handle sending form message
type serverStateType = {
	submitting: boolean;
	status?: {
		ok: boolean;
		msg: string;
	} | null;
};

type ContactProps = {
	contact: any;
};

function Contact() {
	const [formData, setFormData] = useState<formDataType>(initialFormData);
	const [serverState, setServerState] = useState<serverStateType>({
		submitting: false,
		status: null,
	});

	/**
	 * Change {formData} variable when user input data
	 *
	 * @param e change event in form inputs
	 */
	const handleDataChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	/**
	 * Handle the http request we sent to send our message (that user wrote)
	 * and give message to the user to know what happened, is the message sent or not.
	 *
	 * @param ok if message has been sent or not
	 * @param msg the message to be shown to the user
	 */
	const handleServerResponse = (ok: boolean, msg: string) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		if (ok) {
			setFormData(initialFormData);
		}
		setTimeout(() => {
			setServerState((prev: serverStateType) => ({
				...prev,
				status: null,
			}));
		}, 3000);
	};

	/**
	 * Submitting message when user clock send button
	 *
	 * @param e form submit event
	 */
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Submitting Form
		setServerState({ submitting: true });
        const form = document.createElement('form');
        Object.keys(formData).forEach((key) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = formData["your-name"];
            input.value = formData["your-subject"];
            form.appendChild(input);
        });
        emailjs.sendForm('service_xbm6ir9', 'template_6v4rspy', form, '-QDiI9-snFkI5K9nI')
        .then((result) => {
            handleServerResponse(true, "Message Has Been Send");
            console.log(result.text);
        }, (error) => {
            handleServerResponse(
                			false,
                			"Error occurs while sending"
                		);
            console.log(error.text);
        });
		// axios({
		// 	method: "post",
		// 	url: "samarthchaplot7@gmail.com",
		// 	data: formData,
		// })
		// 	.then((r) => {
		// 		handleServerResponse(true, "Message Has Been Send");
		// 	})
		// 	.catch((r) => {
		// 		handleServerResponse(
		// 			false,
		// 			"Error occurs while sending"
		// 		);
		// 	});
	};

	const contactInfo = [
		{
			title: "ADDRESS",
			value: "D Gate, FF, Pramukhchhaya Society, Yogi Chowk, Opp. Yogi Arcade, Punagam, Surat, Gujarat-395010",
		},
		{
			title: "PH NO.",
			value: "+91 6351112680",
		},
		{
			title: "EMAIL",
			value: "rajaranicoaching@gmail.com",
		},
	];
	return (
		<section id="contact" className="section">
			<div className="section-wrapper block">
				<div className="content-1300">
					<div className="row">
						<h2 className="entry-title section-title">
							Get in touch
						</h2>
						<div className="one-half width-40">
							<p className="section-info">
								Provide Your Detail & We'll Connect with You
								Soon
							</p>
							{/* {contactData.paragrapgs.map((parg, i) => (
								<p key={"contact-parg-" + i}>{parg}</p>
							))} */}
							<p>
								{contactInfo.map((info, i) => (
									<Fragment key={"contact-info-" + i}>
										<b>{info.title}</b> {info.value} <br />
									</Fragment>
								))}
							</p>
						</div>

						<div className="one-half width-55 last">
							<div className="contact-form">
								<form
									action="#"
									method="post"
									onSubmit={handleSubmit}>
									<p>
										<input
											id="name"
											type="text"
											name="your-name"
											placeholder="NAME"
											pattern="(?!.^\s$)[A-Za-z ]{3,}"
											required
											value={formData["your-name"]}
											onChange={handleDataChange}
										/>
									</p>
									<p>
										<input
											id="contact-email"
											type="email"
											name="your-email"
											placeholder="EMAIL"
											pattern="(?=.*[a-zA-Z])[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
											required
											value={formData["your-email"]}
											onChange={handleDataChange}
										/>
									</p>
									<p>
										<input
											id="subject"
											type="text"
											name="your-subject"
											placeholder="SUBJECT"
											pattern="(?!.^\s$)[A-Za-z ]{3,}"
											required
											value={formData["your-subject"]}
											onChange={handleDataChange}
										/>
									</p>
									<p>
										<textarea
											id="message"
											name="your-message"
											placeholder="MESSAGE"
											required
											value={formData["your-message"]}
											onChange={
												handleDataChange
											}></textarea>
									</p>
									<p className="contact-submit-holder">
										<input type="submit" value="SEND" />
									</p>
									{(serverState.submitting ||
										serverState.status?.msg) && (
										<p className="respond-message">
											{serverState.submitting
												? "Sending message"
												: serverState.status
												? serverState.status?.msg
												: ""}
										</p>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;