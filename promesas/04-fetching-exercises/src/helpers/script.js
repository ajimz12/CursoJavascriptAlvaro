export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export async function fetchingDataJSON(url, userID) {
  try {
    const response = await fetch(`${url}${userID}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
