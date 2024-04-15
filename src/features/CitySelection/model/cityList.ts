import { CustomSelectOptionType } from "../../../shared/ui/select/model/types";
import jsonList from "./city.list.json";

export const createCityList = (): CustomSelectOptionType[] => {
  const parsed = JSON.parse(JSON.stringify(jsonList));

  return parsed.map(({ id, name }: any) => ({ id, name }));
};
