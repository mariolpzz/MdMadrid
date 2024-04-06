import { db, Noticia } from "astro:db";

export default async function seed() {

    await db.insert(Noticia).values([
        { 
            titulo: '21 Savage sacará su próximo disco el 21 de Abril',
            imagen: 'https://i.scdn.co/image/ab6761610000e5eba5e754a9c1fc7ad7ee01798b',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Kendrick Lamar sorprende con 2 nuevas fechas en Barcelona',
            imagen: 'https://www.billboard.com/wp-content/uploads/2023/10/kendrick-lamar-2023-met-gala-billboard-1548.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Los conciertos de Kendrick no dejan de sorprender en Europa',
            imagen: 'https://static.eldiario.es/clip/127625b0-e505-475d-8546-18e6f611bcec_16-9-discover-aspect-ratio_default_0.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Fernando Costa: "El rey del genero en español"',
            imagen: 'https://www.publico.es/uploads/2022/05/27/629128392f5e0.jpeg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo de prueba 5',
            imagen: 'https://media.gq.com.mx/photos/5e40c213b925380008d0bcf9/16:9/w_2560%2Cc_limit/GettyImages-1205158935.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 6 mas largo que el titulo numero 1',
            imagen: 'https://mussica.info/wp-content/uploads/2023/03/yung-beef-1522142053.-1x1780-1.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },

    ]);
}