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
			<Navbar shouldHideOnScroll>
				<NavbarBrand>
					<a href="#">
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
						<ScrollLink
							activeClass="current"
							smooth
							duration={500}
							spy
							color="foreground"
							to={"courses"}>
							Courses
						</ScrollLink>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							Community
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							Blog
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							About
						</Link>
					</NavbarItem>
					{/* <NavbarItem>
						<Link color="foreground" href="#" aria-current="page">
							Customers
						</Link>
					</NavbarItem> */}
					<NavbarItem>
						<ScrollLink
							activeClass="current"
							smooth
							duration={500}
							spy
							color="foreground"
							to={"contact"}>
							Contact Us
						</ScrollLink>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem></NavbarItem>
					<NavbarItem className="hidden lg:flex ">
						<Link href="#" color="secondary">
							Login
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Button
							as={Link}
							color="secondary"
							href="#"
							variant="flat">
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</>
	);
}
