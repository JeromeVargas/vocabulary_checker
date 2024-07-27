import data from "../data/meta-data.json";

export type metaData = typeof data;

const dataFetcher = () => {
  // gets the keys to be pass a kebab-case url paths and the values
  const keys = Object.keys(data);
  const values = Object.values(data);

  // maps the keys (paths in original language) and its translations (topics in target language)
  const topics: { title: string; translation: string }[] = keys.map(
    (title, index) => {
      return { title, translation: values[index].translation };
    },
  );

  return { data, keys, topics };
};

export default dataFetcher;
