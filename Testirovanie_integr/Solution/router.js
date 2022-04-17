const express = require("express");
const app = express();
const sameController = require("./sameController");
const port = 3000;
const sameRouter = express.Router();

sameRouter.use("/same", sameController.addSame);
app.use("/", sameRouter);

app.use(function (req, res) {
    res.status(404).send("Not Found")
});
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })