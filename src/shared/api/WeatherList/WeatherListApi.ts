import apiInstance, { API_KEY } from "../instance";

export const addCityToList = (cityName: string) => {
  return apiInstance
    .get(`forecast?q=${cityName}&cnt=8&appid=${API_KEY}&units=metric`)
    .then(({ data }) => data);
};