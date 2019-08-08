import apisauce from "apisauce";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://app-dev.workshop.ws/api/v1.1/workshop/make-bread/";

const create = (baseURL = proxyurl + url) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: "*/*",
    },
    timeout: 10000,
  });

  const apiCall = () => {
    return api.get("");
  };

  return {
    apiCall,
  };
};

export default { create };
