// const callToApi =(dataCard)=>{
//     return fetch('https://dev.adalab.es/api/projectCard', {
//         method: "POST",
//         body: JSON.stringify(dataCard),
//         headers: { "Content-type": "application/json" },
//       })    
//       .then((response)=> response.json())
      
// };

// export default callToApi; 

const callToApi = (dataCard) => {
	return fetch('http://localhost:5001/api/addProject', {
		method: 'POST',
		body: JSON.stringify(dataCard),
		headers: { 'Content-type': 'application/json' },
	}).then((response) => response.json());
};

export default callToApi;