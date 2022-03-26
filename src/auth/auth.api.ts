import Axios, { AxiosRequestConfig } from "axios";

export interface Credentials {
  email: string;
  password: string;
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "GET",
    url: process.env.REACT_APP_API_BASE_URL,
    data,
  };

  const { data: response } = await Axios.request(requestConfig);
  console.log(response);
};
