export const routes = {
  dashboard(value = "") {
    return "/dashboard" + value;
  },
  playlist() {
    return this.dashboard() + "/playlist";
  },
  search(recommend) {
    return this.dashboard("search?q=" + recommend);
  },

  music(id) {
    return this.dashboard("music/" + id);
  },
};
