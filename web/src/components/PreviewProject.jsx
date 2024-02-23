import cover from '../images/cover.jpeg';

function PreviewProject({ dataCard }) {
	return (
		<img
			className="image preview__image"
			src={dataCard.image || cover}
			alt="Imagen del proyecto"
		/>
	);
}

export default PreviewProject;
