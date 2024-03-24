import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

const CourseInfo = () => {
	return (
		<div>
			<section
				id="blog"
				className="blog-section"
				style={{
					backgroundColor: "#F6DBF6",
				}}>
				<div
					className="flex flex-col "
					style={{ paddingLeft: "100px" }}>
					<h2 className="section-title entry-title">
						<span>Princess Cut Deep Neck Blouse Workshop</span>
					</h2>
					<p className="section-info">About This Course: </p>
					<span>
						Workshop Focus: Craft the perfect Princess Cut Deep Neck
						Blouse. Techniques Covered: Receive in-depth cutting and
						drafting instructions.
					</span>
					<strong>
						<p className="section-des">Instructor: PriyaMg</p>
					</strong>
					<strong>
						<p>Duration: 17hrs</p>
					</strong>
					<Button color="secondary">Add to cart</Button>
				</div>
				<div className="blog-image" style={{ paddingLeft: "400px" }}>
					<ReactPlayer
						url={"https://www.youtube.com/watch?v=datoIq_-9SU"}
						controls={true}></ReactPlayer>
				</div>
			</section>
			<hr />
		</div>
	);
};

export default CourseInfo;
