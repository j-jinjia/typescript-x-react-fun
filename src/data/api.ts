import axios, { AxiosResponse } from "axios";
import CoachData from "../types/server/CoachData";

const baseUrl = "https://example-user-api.herokuapp.com";

// Requests a single coach from the server based on their id
export const getCoach = async (id: number): Promise<void | CoachData> => {
  try {
    const res: AxiosResponse<CoachData> = await axios.get(
      `${baseUrl}/users/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(`error in api.ts -> getCoach(${id}).\n`, { error });
  }
};

// Requests all coaches from the server
export const getCoaches = async (): Promise<void | CoachData[]> => {
  try {
    const res: AxiosResponse<CoachData[]> = await axios.get(`${baseUrl}/users`);
    return res.data;
  } catch (error) {
    console.error(`error in api.ts -> getCoaches.\n`, { error });
  }
};
