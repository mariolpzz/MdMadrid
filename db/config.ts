import { defineDb, defineTable, column, NOW } from "astro:db";


export const Noticia = defineTable({
    columns: {
        slug: column.text({ default: "" }),
        titulo: column.text(),
        imagen: column.text(),
        contenido: column.text(),
        autor: column.text({ default: "" }),
        fecha: column.date({ default: NOW }),
    }
})

export const Articulo = defineTable({
    columns: {
        slug: column.text({ default: "" }),
        titulo: column.text(),
        imagen: column.text(),
        contenido: column.text(),
        color: column.text(),
        autor: column.text({ default: "" }),
        fecha: column.date({ default: NOW }),
    }
})

export const Lanzamientos = defineTable({
    columns: {
        url: column.text(),
        imagen: column.text(),
        fecha: column.date({ default: NOW }),
    }
})


export default defineDb ({
    tables: { Noticia, Articulo, Lanzamientos },
});