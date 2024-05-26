const findPath = (pathname: string) => {
  return pathname
    .slice(1, pathname.length)
    .split("-")
    .map((pathPart, index) => {
      if (index !== 0) return pathPart[0].toUpperCase() + pathPart.slice(1);
      return pathPart;
    })
    .join("");
};

export default findPath;
