const BASE_URI = process.env.BASE_API_URL;

export const getAllFilms = async () => {
  try {
    const res = await fetch(`${BASE_URI}/films`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
