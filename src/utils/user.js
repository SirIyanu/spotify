// const logout = () => {
//   localStorage.removeItem("user");
// };

export const isUserLogin = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  return user.email && user.token;
};

export const appSettings = () => {
  return JSON.parse(localStorage.getItem("app-settings") || "{}");
};

export const downloadApp = () => {
  const app = appSettings();
  localStorage.setItem(
    "app-settings",
    JSON.stringify({
      ...appSettings,
      hasInstalledApp: true,
    })
  );
  const con = window.confirm("Have you downloaded the app");
  if (con) {
    console.log(con);
    window.location.reload();
  }
};
