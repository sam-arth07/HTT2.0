import React from "react";
import RajaRaniLogo from "../assets/images/RajaRaniLogo.webp";
import {
	Footer,
	FooterBrand,
	FooterCopyright,
	FooterDivider,
	FooterIcon,
	FooterLink,
	FooterLinkGroup,
	FooterTitle,
} from "flowbite-react";
import {
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTwitter,
	BsYoutube,
} from "react-icons/bs";

export default function FooterComponent() {
	return (
		<Footer container style={{ backgroundColor: "#F6DBF6" }}>
			<div className="w-full md:px-20">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-2">
					<div>
						<FooterBrand
							href="/"
							src={RajaRaniLogo}
							alt="Flowbite Logo"
							name=""
							className="md:mx-10 md:w-[120%]"
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:flex sm:gap-34 justify-end">
						<div>
							<FooterTitle title="Contact" />
							<FooterLinkGroup col>
								<FooterLink href="#">
									rajaranicoaching@gmail.com
								</FooterLink>
								<FooterLink href="#">
									(+91) 63511 12680
								</FooterLink>
							</FooterLinkGroup>
						</div>
						{/* <div>
							<FooterTitle title="Follow us" />
							<FooterLinkGroup col>
								<FooterLink href="#">Instagram</FooterLink>
								<FooterLink href="#">Facebook</FooterLink>
							</FooterLinkGroup>
						</div> */}
						<div>
							<FooterTitle title="Legal" />
							<FooterLinkGroup col>
								<FooterLink href="#">Privacy Policy</FooterLink>
								<FooterLink href="#">
									Terms &amp; Conditions
								</FooterLink>
							</FooterLinkGroup>
						</div>
					</div>
				</div>
				<FooterDivider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<FooterCopyright
						href="#"
						by="Raja Rani Coaching™"
						year={2024}
					/>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<FooterIcon
							href="https://www.facebook.com/rajaranicoaching"
							icon={BsFacebook}
							target="_blank"
						/>
						<FooterIcon
							href="https://www.instagram.com/rajarani_coaching"
							icon={BsInstagram}
							target="_blank"
						/>
						<FooterIcon
							href="https://twitter.com/coachingRR"
							icon={BsTwitter}
							target="_blank"
						/>
						<FooterIcon
							href="https://www.youtube.com/@rajaranicoaching"
							icon={BsYoutube}
							target="_blank"
						/>
					</div>
				</div>
			</div>
		</Footer>
	);
}
