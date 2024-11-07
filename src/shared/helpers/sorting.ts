export const dateSorter = (dateA: string, dateB: string) => {
  return new Date(dateA).getTime() - new Date(dateB).getTime();
};

export const stringSorter = (strA: string, strB: string) => {
  return strA.localeCompare(strB);
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
