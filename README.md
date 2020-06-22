## `Instrucciones:`

Para visualizar y utilizar la página web de búsqueda de trabajos primeramente se deben obtener los archivos de la rama. Para ello es necesario destinar una carpeta donde guardar el repositorio, cuando ya se destine una carpeta y estemos dentro de esa carpeta(Terminal: cd/NombreCarpeta), vamos a nuestro terminal e ingresamos "git clone git@gitlab.com:parleycl/rockstart/postulantes/postulacion-sebasti-n-riquelme.git", posteriormente entramos a la carpeta descargada con el comando "cd postulacion-sebasti-n-riquelme.git". Ya dentro de esa carpeta a través del terminal (cd NombreCarpeta/postulacion-sebasti-n-riquelme) se colocan los siguientes dos comandos "git fetch" y "git checkout Sebastian", ahí se obtendrán todos los archivos solicitados de la rama Sebastian.

**Requisitos** [Es necesario tener instalado npm(el cual se instala en el terminal con el comando "npm install") y también se debe tener instalado angular CLI par iniciar el servidor local, éste se instala con el siguiente comando en el terminal "npm install -g @angular/cli".

Ya teniendo el repositorio con los archivos y también el angular CLI junto con npm podemos continuar.

Dentro de nuestra carpeta donde tenemos todos nuestros archivos debemos entrar a la carpeta "trabajo" generada con angular, por lo que nuestra ruta sería de momento: cd NombreCarpeta/postulacion-sebasti-n-riquelme/trabajo. Luego de estar dentro de "trabajo" podemos ingresar un "ng-serve" que comenzará a compilar y terminará por habilitarnos nuestro servidor local, por lo que proseguimos a ingresar en cualquiera de nuestros navegadores "localhost:4200" y podremos finalmente visualizar nuestra página.

Ahora, ¿Cómo se utiliza?

1.- En el primer recuadro se debe ingresar una descripción del trabajo que se desea obtener [Por ejemplo: Java]
2.- En el segundo recuadro se ingresa el lugar del trabajo [Por ejemplo: San Francisco]
3.- Se puede seleccionar si se desea que sea un trabajo "Full Time".
4.- Se apreta el botón "Buscar"
5.- Para visualizar nuestros resultados debemos ir a opciones de nuestro navegador/Más Herramientas/Herramientos del desarrollador o también click derecho e "inspeccionar elemento" y nos dirigimos a nuestra consola, donde se podrán visualizar nuestros resultados.



