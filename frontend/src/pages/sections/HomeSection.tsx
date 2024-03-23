import React from "react";
// ---------------
type HomeProps = {
	heroSection: any;
};
// ---------------
function HomeSection() {
	return (
		<section id="home" className="section full-width-section">
			<div className="section-wrapper block">
				<div className="home-left-part">
					<p className="site-des">As Seen On Shark tank Season 3</p>
					<h1 className="entry-title">RAJA RANI COACHING</h1>
					<p className="site-info"></p>
				</div>
				<div key="id1" className="home-right-part"></div>
			</div>
		</section>
	);
}

export default HomeSection;
