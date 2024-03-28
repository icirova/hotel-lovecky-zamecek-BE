import sql from "../postgres.js"

export async function getAllApartments() {
    const users = await sql`
    SELECT * FROM public.apartments ORDER BY price ASC; 
    `
    return users
  }

export async function getApartmentByID(appartmentId) {
    const users = await sql`
    SELECT * FROM public.apartments WHERE apartments_id = ${appartmentId} LIMIT 1 ; 
    `
    return users.count > 0 ? users[0]: null;
  }