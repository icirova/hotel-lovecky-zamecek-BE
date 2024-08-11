import sql from "../postgres.js"

export const getMenuItemByCategory = async (category) => {
    const menuItems = await sql`
    SELECT * FROM public.menu WHERE category =${category} ORDER BY price ASC; 
    `
    return menuItems    
}