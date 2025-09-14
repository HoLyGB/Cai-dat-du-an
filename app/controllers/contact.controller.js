// Tạo mới contact
exports.create = (req, res) => {
  res.send({ message: "create handler" });
};

// Lấy tất cả contact
exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

// Lấy một contact theo id
exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

// Cập nhật contact theo id
exports.update = (req, res) => {
  res.send({ message: "update handler" });
};

// Xóa một contact theo id
exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};

// Xóa tất cả contact
exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

// Lấy tất cả contact yêu thích
exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
