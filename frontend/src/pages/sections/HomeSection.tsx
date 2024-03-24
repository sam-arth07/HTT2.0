import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import SharkTankLogo from "../../assets/images/logo.png";
import { Controls } from "@vidstack/react";
import Banner from "../../components/Banner";
// ---------------

// ---------------
function HomeSection() {
	return (
		<section id="home" className="section full-width-section">
			<div
				className="section-wrapper block"
				style={{ marginTop: "-80px", paddingLeft: "150px" }}>
				<div className="home-left-part">
					<div className="">
						<h1 className="entry-title text-center"></h1>
						<p className="site-des mx-24 ">As Seen On</p>
						<img
							src={SharkTankLogo}
							alt="Shark tank Logo"
							width="100%"
							height="100%"
						/>
					</div>
					<p className="site-info"></p>
				</div>
				<div
					key="id1"
					className="home-right-part section-wrapper"
					style={{ paddingRight: "80px" }}>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=u9ZQbLBV-14"
						controls={true}
						light={true}
						width="100%"
						height="60%"
					/>
				</div>
			</div>
		</section>
	);
}

export default HomeSection;
