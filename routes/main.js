const { MainDTO } = require("../models");
const bd = require("../dal/storage");

module.exports = (request, response) => {
  const model = new MainDTO("TODO LIST"
                            , bd.getTasks()
                            , bd.getStatuses());
  
  response.render("main", model);
}