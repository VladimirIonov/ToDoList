const { request } = require("express");
const express = require("express");
const { Status, Task } = require("./models");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

app.get("/", (request, response) => {
  const statuses = [
    new Status("New"),
    new Status("Working"),
    new Status("Complete"),
  ];
  const tasks = [
      new Task("task 1", null, null, statuses[0]),
      new Task("task 1", null, null, statuses[2]),
  ];

  const model = { tasks, statuses };
  
  response.render("main", model);
})