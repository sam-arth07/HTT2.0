import React, { useState } from "react";
// import video1 from "../../assets/videos/video1.mp4";
import CardComponent from "../../components/Card";
import { Link } from "react-router-dom";
const Courses = () => {
	const courses = [
		{
			id: 1,
			name: "Course 1",
			description: "This is course 1",
			videoUrl: "",
		},
		{
			id: 2,
			name: "Course 2",
			description: "This is course 2",
			videoUrl: "",
		},
		// Add more courses as needed
	];

	const [currentCourse, setCurrentCourse] = useState(courses[0]);

	const handleCourseClick = (course) => {
		setCurrentCourse(course);
	};

	return (
		<section
			id="courses"
			className="section full-width-section w-screen h-screen">
			{/* <div> */}
			<div className="pt-5 px-10 md:px-36">
				<h2
					className="section-title text-center"
					style={{ fontSize: "48px" }}>
					Courses
				</h2>
				<div className="flex flex-col md:flex-row md:flex gap-8 ">
					{/* <Link to={'/courses/1'}> */}
					<CardComponent
						url={
							"https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fksdax%2F09bf0c37-f847-4b85-a825-8f41804d77d3.jpg&w=384&q=75"
						}
						name={"Princess Cut Deep Neck Blouse Workshop"}
					/>
					{/* </Link> */}
					{/* <Link to={'/courses/1'}> */}
					<CardComponent
						url={
							"https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fksdax%2Ffbde7c97-e0ad-4dc0-94d2-2b93f76d202a.png&w=384&q=75"
						}
						name={"PriyaMG Pattern Special Blouse Workshop"}
					/>
					{/* </Link> */}
					{/* <Link to={'/courses/1'}> */}
					<CardComponent
						url={
							"https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fksdax%2F65e99632-caaa-45d6-a9ec-c57c28726404.jpg&w=384&q=75"
						}
						name={"Multipurpose Gown Workshop"}
					/>
					{/* </Link> */}
					{/* <Link to={'/courses/1'}> */}
					<CardComponent
						url={
							"https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fksdax%2Fabba97c6-b4b7-4c69-9471-858f0455b33c.jpg&w=384&q=75"
						}
						name={"Alia Cut Kurti Workshop"}
					/>
					{/* // </Link> */}
				</div>
			</div>
		</section>
	);
};

export default Courses;
