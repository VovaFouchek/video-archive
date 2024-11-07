export const dateSorter = (dateA: string, dateB: string) => {
  return new Date(dateA).getTime() - new Date(dateB).getTime();
};

export const stringSorter = (strA: string, strB: string) => {
  return strA.localeCompare(strB);
};
