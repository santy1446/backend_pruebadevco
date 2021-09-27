import express from 'express'
import config from './config'
import candidatesRoutes from './routes/candidates.routes'
import rolesRoutes from './routes/roles.routes'
import phase1Routes from './routes/phase1.routes'
import phase2Routes from './routes/phase2.routes'
import phase3Routes from './routes/phase3.routes'
import emailRoutes from './routes/email.routes'

const app = express()

//Setting
app.set('port', config.port)

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Rutas
app.use(candidatesRoutes)
app.use(rolesRoutes)
app.use(phase1Routes)
app.use(phase2Routes)
app.use(phase3Routes)
app.use(emailRoutes)

export default app

