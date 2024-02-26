import React from 'react';
import { Link } from 'react-router-dom';
import PreviewAuthor from './PreviewAuthor';

function Landing({ listProject }) {
	const renderCards = listProject.map((dataCard) => {
		return (
			<a key={dataCard.idProject} href={`http://localhost:5001/detail/${dataCard.idProject}`} className='linkstyle'><article>
				<PreviewAuthor dataCard={dataCard} />
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
