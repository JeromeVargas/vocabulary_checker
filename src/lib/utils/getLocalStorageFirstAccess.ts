const getLocalStorageFirstAccess = () => {
  const firstAccess = window.localStorage.getItem("first_access");
  if (firstAccess) return false;
  return true;
};

export default getLocalStorageFirstAccess;
