export const makePokemonId = (id: number) => {
  return `#${id.toString().padStart(3, '0')}`;
};
