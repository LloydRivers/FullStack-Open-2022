const restaurantRouter = require("express").Router();
const {
  taskOne,
  taskTwo,
  taskThree,
  taskFour,
  taskFive,
  taskSix,
  taskSeven,
  taskEight,
  taskNine,
  taskTen,
  taskEleven,
} = require("../controllers/task.js");

restaurantRouter.get("/task-one", taskOne);
restaurantRouter.get("/task-two", taskTwo);
restaurantRouter.get("/task-three", taskThree);
restaurantRouter.get("/task-four", taskFour);
restaurantRouter.get("/task-five", taskFive);
restaurantRouter.get("/task-six", taskSix);
restaurantRouter.get("/task-seven", taskSeven);
restaurantRouter.get("/task-eight", taskEight);
restaurantRouter.get("/task-nine", taskNine);
restaurantRouter.get("/task-ten", taskTen);
restaurantRouter.get("/task-eleven", taskEleven);
module.exports = restaurantRouter;

/*
get /
post /
delete /:id
patch/put /:id
*/
