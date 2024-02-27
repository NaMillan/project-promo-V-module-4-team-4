import React from 'react';
import { Link } from 'react-router-dom';
import PreviewLanding from './PreviewLanding';

function Landing({ listProject }) {
	const renderCards = listProject.map((project) => {
		return (
			<a
				key={project.idProject}
				href={`https://project-promo-v-module-4-team-4.onrender.com/detail/${project.idProject}`}
				className="linkstyle"
			>
				<article>
					<PreviewLanding project={project} />
				</article>
			</a>
		);
	});

	return (
		<div>
			<section className="titleSection">
				<h1 className="titleSection__h1">Proyectos molones</h1>
				<p className="titleSection__p">
					Escaparate en línea para recoger ideas a través de la
					tecnología.
				</p>
				<Link to="/newProject" className="titleSection__link">
					<button className="titleSection__btn--new">
						Nuevos proyectos
					</button>
				</Link>
				<section className="landing">{renderCards}</section>
			</section>
		</div>
	);
}

export default Landing;
