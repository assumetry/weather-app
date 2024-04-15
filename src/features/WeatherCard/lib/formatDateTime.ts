export const formatDateTime = (date: string) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  return `${hours}:${minutes}0`;
};
