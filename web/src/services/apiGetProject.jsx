const getProjectsFromApi = () => {
	console.log('entro en la funcion');
	return fetch(
		'https://project-promo-v-module-4-team-4.onrender.com/api/getprojects'
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		});
};

const objToExport = {
	getProjectsFromApi: getProjectsFromApi,
};

export default objToExport;
