import express from 'express'
import cors from 'cors'
import { AuthRoute } from './module/auth/auth.route'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/v1/auth", AuthRoute)

app.get("/", (req, res) => {
    res.json({
        message: "🚀 Server is running successfully!",
        status: "success",
        timestamp: new Date().toLocaleDateString()
    })
})


export default app