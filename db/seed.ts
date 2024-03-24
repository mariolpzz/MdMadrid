import { db, Noticia } from "astro:db";

export default async function seed() {
    // TODO

    await db.insert(Noticia).values({ 
        titulo: 'Titulo de prueba',
        imagen: 'https://i.scdn.co/image/ab6761610000e5eba5e754a9c1fc7ad7ee01798b',
       contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.',
    });
}