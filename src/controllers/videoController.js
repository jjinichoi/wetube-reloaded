// export const tranding = (req, res) => res.render("view");
export const tranding = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");

export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit Video");
};
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
