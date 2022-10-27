import getRandomInt from "@/helpers/getRandomInt";

export const incrementRandomInt = async ({ commit }) => {
  commit("setLoading", true);
  const RandomInt = await getRandomInt();
  commit("incrementBy", RandomInt);
  commit("setLoading", false);
};
