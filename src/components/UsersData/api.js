export const fetchData = async (url, setDataFunction) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setDataFunction(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
