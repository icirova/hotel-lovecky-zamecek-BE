import express from 'express'
import cors from 'cors'
import {getAllApartments, getApartmentByID} from './src/apartments/apartmentsSql.js'
const app = express()
const port = 4000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/rooms', async (req, res) => {
    res.send(await getAllApartments())
  }
)

app.get('/api/rooms/:apartmentId', async (req, res) => {
    const params = req.params;
    res.send( await getApartmentByID(params.apartmentId))
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})