# Proyecto grupal módulo 2. JavaScript

## Objetivos

En este proyecto se nos pide desarrollar una página web dinámica aplicando los lenguajes de maquetación **HTML** y **CSS** y el lenguaje de programación **JavaScript.**
Se trata de una **aplicación de ordenador** para crear tarjetas de visita y compartirlas a través de las RRSS (en este caso sólo se va a compartir a través de Twitter).
Este proyecto se completó en **tres semanas por un grupo de cinco desarrolladoras junior.**

## Elementos de la página web

**1. Landing Page**

Para el desarrollo de la Landing Page se han utilizado únicamente los lenguajes de maquetación HTML y CSS. Está compuesta por una cabecera o _header_, un cuerpo central o _main_ y un pie de página o _footer_.  
En el botón de "Comenzar" se ha incluido una transición que marca la acción de hacer click sobre el botón. Esta acción nos conduce al siguiente elemento.

**2. Parte central o aplicación**

Esta es la parte dinámica de la página, es decir, en donde se ha aplicado el lenguaje de programación JavaScript que permite que la página sea interactiva. Se divide en tres secciones. A la derecha de estas secciones se encuetra el bloque de _preview_ que veremos en el punto 3.

2.1 Diseña

En esta sección el usurio o usuaria puede seleccionar el color de su tarjeta de visita de entre tres paletas de colores. Al seleccionar una de ellas, los colores elegidos se muestran automáticamente en la _preview_.

2.2 Rellena

Aquí el usuario o usuaria introduce sus datos en los campos requeridos. Al introducirlos, se muestran en la _preview_ de la tarjeta, si borra sus datos pulsando la tecla de retroceso, vuelve a aparecer el texto por defecto de la _preview_.
En esta sección se incluye el botón de "Añadir imagen". El usuario o usuaria pueden buscar en los archivos de su ordenador una imagen que incluir en su tarjeta.
Estos datos son enviados a un fetch previamente dado. Los datos se almacenan de forma local mediante el uso de Local Storage.

2.3 Comparte

Una vez el usuario o usuaria ha completado la tarjeta al hacer click sobre el botón "Crear tarjeta" puede compartir el link de la misma a través de Twitter.
Estas tres secciones son colapsables, es decir, al abrir una las otras dos se cierran automáticamente.

**3. Previsualización (_preview_) y botón reset**

En este bloque se muestran:

3.1 _Preview_  
 La tarjeta que se actualiza en el mismo momento en que el usuario introduce sus datos. Todos los datos se almacenan de forma local, de forma que,git add si sale de la página o se recarga, no es necesario introducir los datos nuevamente.

3.2 Botón _Reset_

Al hacer click sobre el botón de _reset_ tanto los datos que se muestran en la página como los almacenados de forma local se borran quedando la _preview_ de la tarjeta con el texto y la imagen que aparecen por defecto.
