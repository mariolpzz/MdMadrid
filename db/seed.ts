import { db, Noticia, Articulo } from "astro:db";

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
        { 
            titulo: 'Titulo numero 7',
            imagen: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTOH7v9X1Y0sB1fCgK2Hj9Sz9gGVZ8XiaB6mMADnAxhDt6vx7igOJJASEwU6JqJTLlb2-_l84Ge5gk1LjU',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 8',
            imagen: 'https://cdn.wegow.com/media/artists/ill-pekeno-ergo-pro/ill-pekeno-ergo-pro-1708074909.2159207.png',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 9',
            imagen: 'https://www.billboard.com/wp-content/uploads/2023/10/bad-bunny-press-2023-billboard-1548.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 10',
            imagen: 'https://lh3.googleusercontent.com/ueSDsUyfIfao1LDeCGlV6LqSFrfQ-V7cWvdK96Mrtbjhpt9M6wzKzClTOLlXXu1gprxgmV-g9dy8IRo=w2880-h1200-p-l90-rj',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 11',
            imagen: 'https://ca-times.brightspotcdn.com/dims4/default/bd71fd5/2147483647/strip/false/crop/3609x2474+0+0/resize/1486x1019!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F14%2F76%2F958952b32c7bb27d8c8e812b9d64%2Faa3035d9fee446949aa2e5aedd58edef',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 12',
            imagen: 'https://www.santiagoturismo.com/files/full/2023/11/al.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 13',
            imagen: 'https://www.navarratelevision.es/media/IMG/2024/C5AF34D4-A14F-F5E1-1746DD14034262DC.JPG',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg.| Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },
        { 
            titulo: 'Titulo numero 14',
            imagen: 'https://image.ondacero.es/clipping/cmsimages01/2023/11/07/B6BE40CB-6984-419F-9D4C-1E0C9C08707C/raul-clyde_104.jpg?crop=1675,1675,x416,y0&width=1200&height=1200&optimize=low&format=webply',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.'
        },

    ]);



    await db.insert(Articulo).values([
        { 
            titulo: '21 Savage sacará su próximo disco',
            imagen: 'https://i.scdn.co/image/ab6761610000e5eba5e754a9c1fc7ad7ee01798b',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.',
            color: '#DC0019'
        },
        { 
            titulo: 'Kendrick Lamar sorprende con 2 nuevas fechas',
            imagen: 'https://www.billboard.com/wp-content/uploads/2023/10/kendrick-lamar-2023-met-gala-billboard-1548.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.',
            color: '#4287f5'
        },
        { 
            titulo: 'Articulo numero 3',
            imagen: 'https://i.scdn.co/image/ab6761610000e5eba5e754a9c1fc7ad7ee01798b',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.',
            color: '#ab4722'
        },
        { 
            titulo: 'Titulo del articulo numero 4 mas largo lorem ipsum dolor sit amet',
            imagen: 'https://www.billboard.com/wp-content/uploads/2023/10/kendrick-lamar-2023-met-gala-billboard-1548.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.',
            color: '#4bf542'
        },
        { 
            titulo: 'Articulo 5',
            imagen: 'https://i.scdn.co/image/ab6761610000e5eba5e754a9c1fc7ad7ee01798b',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.',
            color: '#e6d51e'
        },
        { 
            titulo: 'Articuilo numero 6',
            imagen: 'https://www.billboard.com/wp-content/uploads/2023/10/kendrick-lamar-2023-met-gala-billboard-1548.jpg',
            contenido: 'Shéyaa Bin Abraham-Joseph (22 de octubre de 1992), más conocido por su nombre artístico 21 Savage es un rapero y compositor británico, lanzó el sencillo, "Picky", producido por DJ Plugg. Fue lanzado más adelante en su mixtape del principio, la cinta de la matanza, lanzada el 25 de mayo de 2015.1​ El 2 de julio de 2015, Savage lanzó un EP colaborativo, Free Guwop, con Sonny digital.2​ Es un homenaje EP a su compañero rapero e influencia Gucci Mane. El 1 de diciembre de 2015, 21 Savage lanzó su segundo mixtape, Slaughter king.',
            color: '#863187'
        }
    ]);

}