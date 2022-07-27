import React from "react";

import ProjectLayout from "../styles/ProjectLayout.module.scss";
import Navbar from "../components/Navbar"
const CCWMProject = () => {
	return (

		<main className={ProjectLayout.body}>
			<Navbar/>
			<section>
				<div className={ProjectLayout.headingContainer}>
					<h1>CCWM User Experience Design</h1>
					<hr className={ProjectLayout.headingRule}/>
				</div>
			</section>
		</main>
	);
};

export default CCWMProject;
