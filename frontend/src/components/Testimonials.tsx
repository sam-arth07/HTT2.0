import React from "react";
import { Avatar, Blockquote } from "flowbite-react";
import { Carousel } from "flowbite-react";
export default function Testimonials() {
	return (
		<div
			className="section-wrapper full-width-section h-56 sm:h-64 xl:h-80 2xl:h-96"
			style={{ backgroundColor: "#F9F0FF" }}>
			<Carousel leftControl="" rightControl="">
				<figure className="mx-auto max-w-screen-md text-center ">
					<svg
						className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 14">
						<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
					</svg>
					<Blockquote>
						<p className="text-2xl font-medium italic text-gray-900 dark:text-white">
							"Bahut detail me sikhate Hai aap kuch hide nahi
							rakhte, perfect cutting, perfect fitting, perfect
							drafting 👌👍"
						</p>
					</Blockquote>
					<figcaption className="mt-6 flex items-center justify-center space-x-3">
						{/* <Avatar
						rounded
						size="xs"
						img="/images/people/profile-picture-5.jpg"
						alt="profile picture"
					/> */}
						<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
							<cite className="pr-3 font-medium text-gray-900 dark:text-white">
								Pratima Portayy
							</cite>
							{/* <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
							CEO at Google
						</cite> */}
						</div>
					</figcaption>
				</figure>
				<figure className="mx-auto max-w-screen-md text-center ">
					<svg
						className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 14">
						<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
					</svg>
					<Blockquote>
						<p className="text-2xl font-medium italic text-gray-900 dark:text-white">
							"I m out of words to describe how useful your class
							was. In fact your one class tempted Me to join other
							workshops of yours. I like your way of teaching.
							Very kind and slow explanation makes it very clear
							for me to understand. Even a beginner can make a
							good outfit from your teaching. Very proud of you.
							Planning to join some of your workshops in the
							future. Thank u so much. Grow and glow. God bless
							🙏"
						</p>
					</Blockquote>
					<figcaption className="mt-6 flex items-center justify-center space-x-3">
						{/* <Avatar
						rounded
						size="xs"
						img="/images/people/profile-picture-5.jpg"
						alt="profile picture"
					/> */}
						<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
							<cite className="pr-3 font-medium text-gray-900 dark:text-white">
								Anamika Singh
							</cite>
							{/* <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
							CEO at Google
						</cite> */}
						</div>
					</figcaption>
				</figure>
			</Carousel>
		</div>
	);
}
