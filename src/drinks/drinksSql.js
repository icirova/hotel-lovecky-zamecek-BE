import sql from "../postgres.js"

export const getDrinkItemByCategory = async (category) => {
    const drinkItems = await sql`
    SELECT * FROM public.drinks WHERE category =${category} ORDER BY price ASC; 
    `
    return drinkItems    
}

