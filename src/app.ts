import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.json({
        message: "🚀 Server is running successfully!",
        status: "success",
        timestamp: new Date().toLocaleDateString()
    })
})


export default app