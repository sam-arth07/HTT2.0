import { useState, useEffect } from "react";
import React from "react";
// import "./App.css";
import Loader from "../components/Loader";
import HomeSection from "./sections/HomeSection";
import Contact from "./sections/Contact";
import Banner from "../components/Banner";
import Courses from "./sections/Courses";
import Testimonials from "../components/Testimonials";
export default function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	const [fadeOffLoader, setFadeOffLoader] = useState<boolean>(false);
	useEffect(() => {
		const loaderTimer = setTimeout(handleLoad, 750);
		return () => {
			clearTimeout(loaderTimer);
		};
	}, []);
	const handleLoad = () => {
		setFadeOffLoader(true);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};
	return (
		<>
			{loading ? <Loader fadeOffLoader={fadeOffLoader} /> : <></>}
			<div>
				<HomeSection />
				<Banner />
				<Testimonials />
				<Courses />
				<Contact />
			</div>
		</>
	);
}
