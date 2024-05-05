import { faker } from "@faker-js/faker";
import { routes } from "../route";

export const mostListenedToApi = async () => {
  const resp = await fetch("https://spotify-api-snowy-two.vercel.app/songs");
  const data = (await resp.json()) ?? [];
  return data.splice(0, 8);
};

export const episodesApi = async () => {
  const resp = await fetch("https://spotify-api-snowy-two.vercel.app/songs");
  return resp.json();
};
