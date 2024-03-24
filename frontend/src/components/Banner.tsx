import React from "react";
import knitball from "../assets/images/knitball.png";
import measureTape from "../assets/images/measureTape.png";
import scissors from "../assets/images/scissors.png";
import sewmachine from "../assets/images/sewmachine.png";
import screwdriver from "../assets/images/screwdriver.png";
import sui from "../assets/images/sui.png";
export default function Banner() {
	return (
		<div
			className="section-wrapper full-width-section flex flex-row gap-20"
			style={{ backgroundColor: "#F6DBF6" }}>
			<img src={sewmachine} alt="" />
			<img src={sui} alt="" />
			<img src={scissors} alt="" />
			<img src={screwdriver} alt="" />
			<img src={knitball} alt="" />
			<img src={measureTape} alt="" />
		</div>
	);
}
