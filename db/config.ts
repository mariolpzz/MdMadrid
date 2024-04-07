import { defineDb, defineTable, column, NOW } from "astro:db";


const Noticia = defineTable({
    columns: {
        titulo: column.text(),
        imagen: column.text(),
        contenido: column.text(),
        fecha: column.date({ default: NOW }),
    }
})


export default defineDb ({
    tables: { Noticia },
});