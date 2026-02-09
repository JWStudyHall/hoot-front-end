import api from "./apiConfig.js";

export const getHoots = async () => {
  try {
    const { data } = await api.get("/hoots");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHoot = async () => {
  try {
    const { data } = await api.get("/hoots/:hootsId");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createHoots = async () => {
  try {
    const { data } = await api.post("/hoots/new");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const updatePet = async (petId, petData) => {
//   try {
//     const response = await axios.put(`${BASE_URL}/${petId}`, petData);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deletePet = async (petId) => {
//   try {
//     const response = await axios.delete(`${BASE_URL}/${petId}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
