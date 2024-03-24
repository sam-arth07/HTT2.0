import React, { useContext } from "react";
import RajaRaniLogo from "../assets/images/RajaRaniLogo.webp";
import { Link as ScrollLink } from "react-scroll";
import { Outlet, Link as RouteLink } from "react-router-dom";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";

export default function NavbarComponent() {
	return (
		<>
			<Navbar shouldHideOnScroll style={{ backgroundColor: "#F6DBF6" }}>
				<NavbarBrand>
					<a href="/">
						<img
							src={RajaRaniLogo}
							alt="Raja Rani Coaching"
							className="w-[80%] md:w-[65%]"
						/>
					</a>
					{/* <p className="font-bold text-inherit">ACME</p> */}
				</NavbarBrand>
				<NavbarContent
					className="hidden sm:flex gap-4"
					justify="center"
					style={{ cursor: "pointer" }}>
					<NavbarItem>
						<Link
							color="foreground"
							href="/courses"
							style={{ color: "#7F0082" }}>
							Courses
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							color="foreground"
							href="/community"
							style={{ color: "#7F0082" }}>
							Community
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							color="foreground"
							href="/blog"
							style={{ color: "#7F0082" }}>
							Blog
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							color="foreground"
							href="/about"
							style={{ color: "#7F0082" }}>
							About
						</Link>
					</NavbarItem>
					{/* <NavbarItem>
						<Link color="foreground" href="#" aria-current="page">
							Customers
						</Link>
					</NavbarItem> */}
					<NavbarItem>
						<Link
							color="foreground"
							href="/contact"
							style={{ color: "#7F0082" }}>
							Contact Us
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem></NavbarItem>
					<NavbarItem className="hidden lg:flex ">
						<Link
							href="/login"
							color="secondary"
							style={{ color: "#7F0082" }}>
							Login
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Button
							as={Link}
							color="secondary"
							style={{ color: "#7F0082", fontFamily: "Poppins" }}
							href="/signup"
							variant="flat">
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</>
	);
}
