const getProjectsFromApi = () => {
    return fetch('http://localhost:5001/api/getprojects')
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };


  const objToExport = {
    getProjectsFromApi: getProjectsFromApi,
  };
  
  export default objToExport;
  

  
  
  