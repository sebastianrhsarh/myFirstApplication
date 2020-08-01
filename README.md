# Trainee Developer Test

Este es un test pensado para demostrar las habilidades de los candidatos para integrar el Área de Ingeniería de Rockstart. Esta prueba esta pensada para desarrolladores trainee.

# `Problema 1. Teórico`

Una empresa de arriendo de automóviles ha crecido lo suficiente como para iniciar un proyecto de automatización de operaciones. Para estos fines, ha elaborado un documento de requerimientos, del cual se desprenden los siguiente datos necesarios para el diseño de la base de datos.

* Se  dispone de un parque de vehículos, entre automóviles, camionetas, jeeps y station wagons.
* Cada vehículo se identifica por su patente y se conoce su marca, modelo y año.
* Se dispone de un grupo de choferes, los que pueden o no ser contratados junto con el arriendo de un automóvil.
* Existe una cierta cantidad de clientes con los que se han celebrado convenios,  Estos clientes simplemente llevan los automóviles que necesitan, pagando contra factura a fines de mes.
* Los clientes sin convenio pueden arrendar automóviles pero deben dejar una garantía monetaria.

## Modelo de datos (Modelo Relacional)

Realice un modelo relacional que utilizaría para resolver este problema con sus respectivos campos, llaves y asociaciones. Intente hacer el modelo lo más robusto posible.

El propósito de este problema es que usted sea capaz de desprender un modelo relacional de requerimientos dados por un cliente no experto en este tema, en donde las entidades no necesariamente están explicitas en el documento, esto le da la facultad de extenderse del enunciado pero no salirse del alcance.

# `Problema 2. Practico`

Desarrollar una aplicación web que permite buscar trabajos listados en la API de [GitHub Jobs](https://jobs.github.com/api). El link te llevara a la documentación de esta API, en donde te explican cómo se utiliza, que parámetros requiere para realizar la búsqueda y como tiene que ser el formato de la petición. En esta instancia vamos a excluir el uso de 'longitud' y 'latitud'.
A nivel de template, al momento de hacer la consulta es necesario que existan los inputs adecuados para los tipo de parámetros que la API recibe, además al momento de ingresar a un trabajo listado, es necesario que se desplieguen todos los campos que trae el json, inclusive el id.
También es necesario un buen nivel de UI/UX al momento de utilizar esta aplicación, está permitido el uso de librerias de diseño como lo es [AntDesing](https://ng.ant.design/docs/introduce/en), [Angular Material](https://material.angular.io/) o [Bootstrap](https://ng-bootstrap.github.io/#/home).

## `Instrucciones generales`

Crear un branch a partir de la rama master con tu nombre y apellido, por ejemplo **john-doe.**

1. Se debe utilizar Docker para el despliegue de la aplicación.
2. Para el desarrollo de la solución se deben ocupar el framework Angular.
3. Se debe sobreescribir este README.md con las instrucciones para poder probar la aplicación.
4. Se debe efectuar una metodología para abordar el proyecto a nivel de repositorio, y efectuar commits y push con regularidad.
5. Se debe describir brevemente en un archivo md cuál fue el planteamiento de la solución y la motivación para postular al cargo.

**Nota: El uso de buenas prácticas de codificación siempre es bienvenido.**


**Éxito**