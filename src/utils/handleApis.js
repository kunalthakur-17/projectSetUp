// utils/handleApi.js

export const handleApi = async (apiFunc, ...args) => {
  try {
    console.log(...args);
    const response = await apiFunc(...args); // handles flexible args
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error?.response?.data || { message: "Something went wrong" };
  }
};
