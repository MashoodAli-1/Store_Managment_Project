import axios from "axios";

const url = "http://localhost:4001";

export const createSales = (sale) => {
  console.log("Called" + sale.name);
  return axios.post(`${url}/sale`, sale);
};
