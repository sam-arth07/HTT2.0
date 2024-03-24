// Pages and Components
import Landing from "../pages/index";
import About from "../pages/sections/About";
import Blog from "../pages/sections/Blog";
import NavbarComponent from "../components/NavbarComponent";
import React from "react";
import Community from "../pages/sections/Community";
import Contact from "../pages/sections/Contact";
import Login from "../pages/sections/Login";
import SignUp from "../pages/sections/SignUp";
import Courses from "../pages/sections/Courses";
import FooterComponent from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import CourseInfo from "../pages/sections/CourseInfo";
// ------------------

/**
 * Render Navigation bar when rendering a component and isLanding to check
 * if the component to be rendered is the landing page or not.
 *
 * In landing page case: nav links works as scrollable links
 * other case(such as : blog): nav links works as router links
 *
 * @param component the component to be rendered
 * @param isLanding check for a component if its the landingpage
 * @returns the given component with the Navbar
 */

const renderWithNav = (
	component: JSX.Element,
	isLanding: boolean
): JSX.Element => {
	return (
		<>	
			<ToastContainer />
			<NavbarComponent />
			{component}
			<FooterComponent />
		</>
	);
};

type RoutesType = {
	path: string;
	element: JSX.Element;
	errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
	{
		path: "/",
		element: renderWithNav(<Landing />, true),
	},
	{
		path: "/about",
		element: renderWithNav(<About />, false),
	},
	{
		path: "/community",
		element: renderWithNav(<Community />, false),
	},
	{
		path: "/blog",
		element: renderWithNav(<Blog />, false),
	},
	{
		path: "/contact",
		element: renderWithNav(<Contact />, false),
	},
	{
		path: "/login",
		element: renderWithNav(<Login />, false),
	},
	{
		path: "/signup",
		element: renderWithNav(<SignUp />, false),
	},
	{
		path: "/courses",
		element: renderWithNav(<Courses />, false),
	},
	{
		path: "/courses/1",
		element: renderWithNav(<CourseInfo />, false),
	}
];

export default routes;

// ---------------
