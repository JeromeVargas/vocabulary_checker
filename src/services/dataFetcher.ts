import data from "../data/meta-data.json";

const dataFetcher = () => {
  const titles = Object.keys(data);
  const values = Object.values(data);

  const topics: { title: string; translation: string }[] = titles.map(
    (title, index) => {
      return { title, translation: values[index].translation };
    },
  );

  return { titles, values, topics };
};

export default dataFetcher;
