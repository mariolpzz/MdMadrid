import { defineDb, defineTable, column } from "astro:db";


const Noticia = defineTable({
    columns: {
        titulo: column.text(),
        imagen: column.text(),
        contenido: column.text(),
    }
})


export default defineDb ({
    tables: { Noticia },
});