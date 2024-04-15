import { CustomSelectOptionType } from "../model/types";

export const sortingSelectOptions = (string: string, array: CustomSelectOptionType[]) => {
  const options = [];

  if (string.length >= 2) {
    for (let i = 0; i < array.length; i++) {
      if (options.length >= 15) break;

      if (array[i].name.toLowerCase().includes(string.toLowerCase())) {
        options.push(array[i]);
      }
    }
  }

  return options;
};
