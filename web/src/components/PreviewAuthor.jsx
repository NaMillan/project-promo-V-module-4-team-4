import user from '../images/user.png';

function PreviewAuthor({ dataCard }) {
	return (
		<section className="preview__autor">
			<section className="info-project previewProject">
				<p className="subtitle previewProject__subtitle">
					Personal Project Card
				</p>
				<hr className="line previewProject__line" />

				<h2 className="previewProject__title">
					{dataCard.name || 'Elegant Workspace'}
				</h2>
				<p className="slogan previewProject__slogan">
					{dataCard.slogan || 'Diseños Exclusivos'}
				</p>
				<p className="previewProject__desc">
					{' '}
					{dataCard.desc ||
						'Product Description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas consequuntur tempore libero veritatis.'}
				</p>
				<section className="technologies previewProject__technologies">
					<p className="text previewProject__technologies--text">
						{dataCard.technologies || 'React JS, MongoDB'}
					</p>

					<a href={dataCard.demo} target="_blank">
						<i className="fa-solid fa-globe previewProject__technologies--world" />
					</a>

					<a href={dataCard.repo} target="_blank">
						<i className="fa-brands fa-github previewProject__technologies--github" />
					</a>
				</section>
			</section>

			<section className="info-autor previewAutor">
				<img
					className="image previewAutor__image"
					src={dataCard.photo || user}
					alt="Imagen del autor"
				/>
				<p className="job previewAutor__job">
					{dataCard.job || 'Developer'}
				</p>
				<p className="name previewAutor__name">
					{dataCard.autor || 'Ana'}
				</p>
			</section>
		</section>
	);
}

export default PreviewAuthor;
