export const formatDate = (date: string) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  return month < 10 ? `${day}.0${month}` : `${day}.${month}`;
};
