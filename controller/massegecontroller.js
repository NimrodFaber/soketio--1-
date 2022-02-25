const Massege = require("../models/chat");

const saveMassege = (messageText) => {
  return new Promise((resolve, rejrct) => {
    const massege = new Massege({ messageText });
    massege
      .save()
      .then((massege) => resolve(massege))
      .catch((err) => rejrct(err));
  });
};

module.exports = { saveMassege };
