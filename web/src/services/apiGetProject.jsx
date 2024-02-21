const getProjectsFromApi = () => {
  console.log("entro en la funcion")
    return fetch('http://localhost:5001/api/getprojects')
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
  

  
  
  