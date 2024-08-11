import sql from "../postgres.js"

export async function getAllApartments() {
    const apartments = await sql`
    SELECT * FROM public.apartments ORDER BY price ASC; 
    `
    return apartments
  }

export async function getApartmentByID(appartmentId) {
    const apartments = await sql`
    SELECT * FROM public.apartments WHERE apartments_id = ${appartmentId} LIMIT 1 ; 
    `
    return apartments.count > 0 ? apartments[0]: null;
  }