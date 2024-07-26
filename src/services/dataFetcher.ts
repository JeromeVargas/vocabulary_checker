import data from "../data/meta-data.json";

export type metaData = typeof data;

const dataFetcher = () => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  const topics: { title: string; translation: string }[] = keys.map(
    (title, index) => {
      return { title, translation: values[index].translation };
    },
  );

  return { data, keys, topics };
};

export default dataFetcher;
