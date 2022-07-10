import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import CSS
import styles from "../styles/ProjectCard.module.scss";

const projectCard = ({ projectTitle, skills, subject, route, imageRef }) => {
	return (
		<div className={styles.projectCard}>
			{/* Image container */}
			<figure>
				<Image
					src={`/assets/${imageRef}`}
					layout="fill"
					alt="Image for User Interaction Project"
					className={styles.projectImg}
				/>
			</figure>

			{/* Content container */}
			<div>
				<div>
					<h1>{projectTitle}</h1>
					<ul>
						{skills.map((skill) => {
							return <li key={skill}>{skill}</li>;
						})}
					</ul>
					{/* Button container */}
					<div className={styles.buttonContainer}>
						{/* Subject or Role text */}
						<p>{subject}</p>
						<Link href={route}>
							<a className={styles.viewProjButton}>
								<span>View Project</span>
								<svg width="13px" height="10px" viewBox="0 0 13 10">
									<path d="M1,5 L11,5"></path>
									<polyline points="8 1 12 5 8 9"></polyline>
								</svg>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default projectCard;
