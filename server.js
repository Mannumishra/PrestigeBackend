const express = require("express")
const categoryrouter = require("./routes/CategoryRouter")
require("./db/ConnectDb")
const cors = require("cors")
const subcategoryRouter = require("./routes/SubcategoryRouter")
const productrouter = require("./routes/Productrouter")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set(express.static("./Public"))
app.use("/Public", express.static("Public"))
app.use(cors())
app.use("/api", categoryrouter)
app.use("/api", subcategoryRouter)
app.use("/api", productrouter)
app.listen(8000, () => {
    console.log("Server is running at 8000 port");
})

