exports.welcome = (req, res) => {
  res.json({
    message: "Welcome to the ATX-Animals api",
    createdBy: "Jared Long",
  });
};
