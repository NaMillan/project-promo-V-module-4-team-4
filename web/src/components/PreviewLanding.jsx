function PreviewAuthor({ project }) {
	return (
		<section className="preview__autor">
			<section className="info-project previewProject">
				<p className="subtitle previewProject__subtitle">
					Personal Project Card
				</p>
				<hr className="line previewProject__line" />

				<h2 className="previewProject__title">{project.nameProject}</h2>
				<p className="slogan previewProject__slogan">
					{project.slogan}
				</p>
				<p className="previewProject__desc"> {project.desc}</p>
				<section className="technologies previewProject__technologies">
					<p className="text previewProject__technologies--text">
						{project.technologies}
					</p>

					<a href={project.demo} target="_blank">
						<i className="fa-solid fa-globe previewProject__technologies--world" />
					</a>

					<a href={project.repo} target="_blank">
						<i className="fa-brands fa-github previewProject__technologies--github" />
					</a>
				</section>
			</section>

			<section className="info-autor previewAutor">
				<img
					className="image previewAutor__image"
					src={project.photoAutor}
					alt="Imagen del autor"
				/>
				<p className="job previewAutor__job">{project.job}</p>
				<p className="name previewAutor__name">{project.nameAutor}</p>
			</section>
		</section>
	);
}

export default PreviewAuthor;
