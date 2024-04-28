import { defineDb, defineTable, column, NOW } from "astro:db";


export const Noticia = defineTable({
    columns: {
        titulo: column.text(),
        imagen: column.text(),
        contenido: column.text(),
        autor: column.text({ default: "" }),
        fecha: column.date({ default: NOW }),
    }
})

export const Articulo = defineTable({
    columns: {
        titulo: column.text(),
        imagen: column.text(),
        contenido: column.text(),
        color: column.text(),
        autor: column.text({ default: "" }),
        fecha: column.date({ default: NOW }),
    }
})



export default defineDb ({
    tables: { Noticia, Articulo },
});