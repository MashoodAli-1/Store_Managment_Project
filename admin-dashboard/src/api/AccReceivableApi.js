import axios from "axios";

const url = "http://localhost:4001";

export const createAccRec = (accRec) => {
  console.log("Called" + accRec.name);
  return axios.post(`${url}/accRec`, accRec);
};
export const getAccRec = () => axios.get(`${url}/accRec/all`);
export const editAccRec = (accRec) =>
  axios.patch(`${url}/accRec/update`, accRec);
export const deleteAccRec = (id) => {
  console.log(`api delete ${id}`);
  return axios.delete(`${url}/accRec/${id}`);
};