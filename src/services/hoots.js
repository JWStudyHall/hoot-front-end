import api from "./apiConfig.js";
import axios from "axios";

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

export const createComment = async (hootId, commentFormData) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/${hootId}/comments`,
      commentFormData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    return res.data;
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
