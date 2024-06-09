import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const CLIENT_ID = "KM-t49GeC6WV3ayGQLyALa-Jj1HCMYdyzEyAnEG2410";

export async function getPhotos() {
  const { data } = await axios.get(`/photos/random?client_id=${CLIENT_ID}&count=4`);
  return data;
}
