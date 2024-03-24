import React from "react";
import ReactPlayer from "react-player/";
import video1 from "../../assets/videos/video1.mp4";
import { IoPlayOutline } from "react-icons/io5";

export default function Community() {
	return (
		<>
			<section
				id="community"
				className="section full-width-section w-screen h-screen">
				<div className="pt-10">
					<h2 className="section-title text-center">
						A Walk In Our Hood
					</h2>
					<ReactPlayer
						url={video1}
						playIcon={<IoPlayOutline />}></ReactPlayer>
					<div className="relative pt-56.25% overflow-hidden rounded-xl">
						<ReactPlayer
							className="absolute top-0 left-0 w-full h-full"
							url="https://drive.google.com/file/d/1ib7GAOM4t9ISfzeoIIZ2_RIijdbpFH_n/preview"></ReactPlayer>
					</div>
				</div>
			</section>
		</>
	);
}
