import data from "../data/meta-data.json";

export type metaData = typeof data;

const dataFetcher = () => {
  // gets the keys to be pass a kebab-case url paths and the values
  const keys = Object.keys(data);
  const values = Object.values(data);

  // maps the keys (paths in original language) as topic and its translations (topics in target language) as link text
  const topics = keys.map((topic, index) => {
    return { topic, linkText: values[index].translation };
  });

  return { data, keys, topics };
};

export default dataFetcher;
