import postgres from 'postgres'

const sql = postgres( {
    host                 : 'localhost',            
    port                 : 5432,      
    database             : 'lovecky-zamecek',            
    username             : 'lovec',           
    password             : 'lovecPg',           
  }) 

export default sql