import PreviewAuthor from './PreviewAuthor';
import PreviewProject from './PreviewProject';

const Preview = ({ dataCard }) => {
	return (
		<section className="preview">
			<PreviewProject dataCard={dataCard} />
			<PreviewAuthor dataCard={dataCard} />
		</section>
	);
};

export default Preview;
