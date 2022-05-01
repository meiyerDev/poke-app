export const camelCase = (str: string) => {
  return str.replace(/(?:^\w|[a-z]|\b\w)/g, function (word, index) {
    return index !== 0 ? word : word.toUpperCase();
  });
};
