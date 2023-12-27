import axios from "axios";

let BackEndPoint = `https://qtify-backend-labs.crio.do/`;

export const getUId = () => {
  let id = Math.random().toString(36).substr(3, 9);
  return id;
};

/**
 * Fetches data for top albums.
 * @returns {Promise} A Promise that resolves to the response data if successful, or null if an error occurs.
 */
export const topAlbumData = async () => {
  try {
    let res = await axios.get(`${BackEndPoint}albums/top`);
    return res.data;
  } catch (e) {
    console.log(`error from AxiosData Component ->`, e);
    return null;
  }
};

/**
 * Fetches data for new albums.
 * @returns {Promise} A Promise that resolves to the response data if successful, or null if an error occurs.
 */
export const newAlbumData = async () => {
  try {
    let res = await axios.get(`${BackEndPoint}albums/new`);
    return res.data;
  } catch (e) {
    console.log(`error from AxiosData Component ->`, e);
    return null;
  }
};

/**
 * Fetches multiple data for top albums.
 * @param {number} count - The number of top albums to fetch.
 * @returns {Promise} A Promise that resolves to an array of top album data.
 */
export const getMultipleTopAlbums = async (count) => {
  const topAlbums = [];

  for (let i = 0; i < count; i++) {
    const albumData = await topAlbumData();
    if (albumData) {
      topAlbums.push(albumData);
    }
  }

  return topAlbums;
};

/**
 * Fetches multiple data for new albums.
 * @param {number} count - The number of new albums to fetch.
 * @returns {Promise} A Promise that resolves to an array of new album data.
 */
export const getMultipleNewAlbums = async (count) => {
  const newAlbums = [];

  for (let i = 0; i < count; i++) {
    const albumData = await newAlbumData();
    if (albumData) {
      newAlbums.push(albumData);
    }
  }

  return newAlbums;
};

// Usage
const numberOfAlbums = 13;

const multipleTopAlbums = await getMultipleTopAlbums(numberOfAlbums);
const multipleNewAlbums = await getMultipleNewAlbums(numberOfAlbums);

console.log(multipleTopAlbums);
console.log(multipleNewAlbums);
