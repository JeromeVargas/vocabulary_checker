import data from "../data/meta-data.json";

export type metaData = typeof data;

const dataFetcher = () => {
  const titles = Object.keys(data);
  const values = Object.values(data);

  const topics: { title: string; translation: string }[] = titles.map(
    (title, index) => {
      return { title, translation: values[index].translation };
    },
  );

  return { data, titles, topics };
};

export default dataFetcher;
