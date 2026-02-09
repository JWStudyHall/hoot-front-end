import api from "./apiConfig.js";

export const getHoots = async () => {
  try {
    const { data } = await api.get("/hoots");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHoot = async (hootId) => {
  try {
    const { data } = await api.get(`/hoots/${hootId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createHoots = async (hootData) => {
  try {
    const { data } = await api.post("/hoots", hootData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateHoot = async (hootId, hootData) => {
  try {
    const { data } = await api.put(`/hoots/${hootId}`, hootData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const deletePet = async (petId) => {
//   try {
//     const response = await axios.delete(`${BASE_URL}/${petId}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
