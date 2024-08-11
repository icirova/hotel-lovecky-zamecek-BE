import express from 'express'
import cors from 'cors'
import { getAllApartments, getApartmentByID } from './src/apartments/apartmentsSql.js'
import { getMenuItemByCategory } from './src/menu/menuSql.js'
import { getDrinkItemByCategory } from './src/drinks/drinksSql.js'

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

app.get('/api/menu', async (req, res) => {
  res.send({
    meal: {
      appetizer: await getMenuItemByCategory('appetizer'),
      lunch: await getMenuItemByCategory('lunch'),
      soup: await getMenuItemByCategory('soup'),
      dessert: await getMenuItemByCategory('dessert'),
    },
    drink : {
      hot: await getDrinkItemByCategory('hot'),
      alcoholic: await getDrinkItemByCategory('alcoholic'),
      soft: await getDrinkItemByCategory('soft')
  }})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


