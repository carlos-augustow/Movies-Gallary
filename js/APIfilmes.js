const APIfilmes = async (filme) => {
  const url = `https://www.omdbapi.com/?apikey=74a491af&s=${filme}`;
  const response = await fetch(url);
  if (response) {
    const data = await response.json();
    return data;
  }
};

export default APIfilmes;
