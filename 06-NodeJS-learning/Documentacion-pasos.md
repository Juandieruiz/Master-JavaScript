# Clase 1

- Creacion de Base de Datos en nuestro admin Visual de MongoDB
- Nombrar la database
- Crear una collection
- Insertar datos en la collection
- Consultar datos en la collection
- Actualizar datos en la collection
- Eliminar datos en la collection


# Clase 2	
- Conexión a la base de datos
- Creacion de archivo index.js para conectarla con nuestra base
- Probamos npm start para verificar que todo esta funcionando

- Usamos en esta clase: [nodemoon, moongose, mongoDB]

# Clase 3 #219
- Crear Servidor con NodeJS (app.js)
- Creamos el archivo app.js en el cual le hemos agregado:
  - Variables express y body-parser que nos permiten recoger los datos que nos llegan por post
  - Variable app que nos permite crear el servidor con express
  - Hacemos un middleware para que nos permita recoger los datos que nos llegan por post y los almacene en una variable convirtiendolo en un objeto JSON
  - Creamos una ruta con una peticion get que nos permita mostrar un mensaje en la consola
  - Exportamos la variable app para que podamos usarla en el archivo index.js
- En el archivo index.js importamos la variable app que hemos creado en el archivo app.js
- En la promesa que esperamos para conectar mongoose , en el then hemos agregado un mensaje que nos permita verificar que el servidor esta funcionando y que la base de datos esta funcionando

# Clase 4 #220
#### Como usar un cliente RESTful 
- En nuestro caso usaremos Postman ya que lo he usado anteriormente
- Hacemos la prueba de la petición desde Postman
<!-- Localhost:3700 & localhost:3700/test -->
- Creamos una coleccion en POSTMAN (Get, Post, Put, Delete)
- En app creamos dos peticiones:
    - GET: /
    - POST: /test
    En el Post hemos agregado que el usuario envie:
    - Nombre: "Juan Diego"
    - Apellidos: "Gomez Ruiz"
    - Web: "juandieruiz.dev"
    - id: "88"
    El registro de los anteriores datos se encuentran en Postman

# Clase 5 #221
#### Crear modelos

- Creamos nuestra carpeta models y dentro de ella creamos un archivo llamado projects.js

- Definiremos el modelo, asi que debemos importar mongoose
- Cargamos también el objeto de Schema
- Creamos el schema de project(objeto molde para nuevos documentos)

- y finalizamos exportando el modulo y pasandole el nombre del modelo y el schema de moongose

- Recuerda que el nombre lo tenemos que poner en minusculas y plural o igualmente lo cambiara en la base de datos

# Clase 6 #222
#### Modelo Vista Controlador
##### Patron de diseño

- Sirve para organizar la arquitectura de la aplicación, ya que es un patrón de diseño de software que separa la logica de negocio de la interfaz del usuario 

- Facilita la mantenibilidad, escabilidad de la web o app creada, y es sencillo de aplicar y no mezclamos las diferentes partes que tiene la aplicación

## MODELO:
### Tipo 1:
- Entidad o referencia hacia un documento de la base de datos
- Modelo para guardar información
- Haremos consultas en base a ese modelo en la base de datos
- Es el modelo creado en el archivo project.js que se encuentra en la carpeta models

### Tipo 2:

- Modelos de consulta que son clases que tienen diferentes metodos para acceder a la base de datos, en el que se hacen consultas y se devuelven al controlador


## Vista

### 
- Es la encargada de mostrar la informacion al usuario
- En este caso como es una API REST, Se devolveran los datos al cliente o usuario que haga la petición

## Controlador

- Es el intermediario entre la vista y el modelo, que se encarga de controlar todas las interacciones del usuario y todas las peticiones que se vayan realizando mediante HTTP en este caso
- Pide los datos al modelo, devuelve informacion a la vista, en este caso por JSON
- Hace cierta logica que hara el programa

Documentacion Wikipedia extra 
[https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador]

# Clase 7 #223
### Controladores
- Creamos una nueva carpeta "controllers" y dentro de ella creamos un archivo llamado projects.js

- Creamos los metodos que necesitamos para nuestra aplicacion y los exportamos (home y test)

### Rutas
- Creamos una nueva carpeta "routes" y dentro de ella creamos un archivo llamado projects.js

- En el archivo lo que hacemos es importar los controladores y darle uso a los metodos(home y test) y a la vez crear las rutas get y post y las exportamos

- Volvemos a app.js y cargamos los archivos de rutas
- y en rutas agreamos la ruta anteriormente dada 

## Metodos Clase #224
### Metódo para guardar nuevos documentos
#### SaveProject
- En el archivo projects.js de la carpeta controllers, creamos el metodo saveProject

- Debemos importar el modelo de project

- Creamos una variable para guardar el nuevo documento que se va a guardar en la base de datos(project)

- Creamos una variable para guardar los datos que nos llegan por post(body a params)

- luego guardamos el proyecto en la base de datos con sus respectivas verificaciones (if)

- Si todo sale bien, devolvemos un mensaje de exito, en caso contrario devolvemos un mensaje de error, datos encontrados en Postman.

# Clase 8 #225
### Metodo que nos devuelve un documento de la bbdd
#### getProject

- Creamos un metodo getProject que nos devuelve un documento de la bbdd

- Declaramos la variable projectId, que sera el id del proyecto que queremos obtener

- Mongoose usa findById para buscar un documento en la base de datos, el que tiene 2 parametros que son nuestro id y un callback que se ejecuta cuando se encuentra el documento

- creamos una condicional if para verificar si el documento existe o no

# Clase 8 #226
### Devolver listado de proyectos
####  getProjects

- Creamos el metodo getProjects la cual devolvera todos los proyectos

- La funcion contentra dos parametros(req y res) y haremos uso del metodo find para buscar todos los documentos de la base de datos al que tambien debemos pasar un callback y hacer uso de la funcion send para enviar los datos al cliente

- Se hacen dos validaciones if para verificar si existen o no los documentos y en caso contrario devolvemos un mensaje de error

- Se hace un return de la funcion para que se ejecute la funcion getProjects

# Clase 8 #227
### Actualizar Proyectos

####  updateProject

- Creamos el metodo updateProject la cual actualizara un proyecto en base de datos

- La funcion contentra dos parametros(req y res) y haremos uso del metodo findByIdAndUpdate para buscar un documento en la base de datos y actualizarlo

- Se hacen dos validaciones if para verificar si existen o no los documentos y en caso contrario devolvemos un mensaje de error

- Se hace un return de la funcion para que se ejecute la funcion updateProject

- Se configura la ruta pasandole el id, y el metodo que queremos que se ejecute y la funcion que se ejecutara updateProject

- En Postman cuando mandamos la petición PUT, nos devolvera el proyecto antiguo pero cuando revisamos en la bbdd esta guardado el nuevo

- EXTRA: Si queremos que el proyecto que muestre POSTMAN sea el nuevo proyecto, debemos crear un 3 parametro {new: true} en la funcion findByIdAndUpdate

# Clase 8 #228
### Borrar Proyectos DELETE

####  removeProject

- Creamos el metodo removeProject la cual borrara un proyecto en base de datos

- La funcion contentra dos parametros(req y res) y haremos uso del metodo findByIdAndRemove para buscar un documento en la base de datos y borrarlo

- Se hacen dos validaciones if para verificar si existen o no los documentos y en caso contrario devolvemos un mensaje de error

- Se hace un return de la funcion para que se ejecute la funcion deleteProject

- Configuramos la ruta pasandole el id, y el metodo que queremos que se ejecute y la funcion que se ejecutara deleteProject

- En Postman cuando mandamos la petición DELETE, nos devolvera un mensaje de exito

# Clase 9 #229
### Subida de Imagenes con Multi-Party

####  uploadImage

- Creamos el metodo uploadImage la cual subira una imagen a la base de datos

- declaramos dos variables que sera el id del proyecto y la imagen que se va a subir que por ahora no esta subida

- hacemos una condicional if en la que tenemos como parametro un archivo files 

- definimos 3 variables filePath , que tomara el path de la imagen subida, fileSplit y fileName que tomara el nombre de la imagen

- Usamos el metodo FindByIdAndUpdate para buscar un documento en la base de datos y actualizarlo

- le pasamos el id del proyecto y un objeto con la imagen y el nombre de la imagen

- hacemos las dos validaciones if para verificar si existen o no los documentos y en caso contrario devolvemos un mensaje de error

- Se hace un return de la funcion para que se ejecute la funcion uploadImage y nos devuelva el proyecto en Postman

- Procedemos a crear la ruta, pero muy importante configurar el middleware multiparty para que nos permita subir archivos

# Clase 10 #230
### Mejora de subida de imagenes

####  variable extSplit & fileExt

- Hemos decidido mejorar la subida de imagenes aceptando solo ciertos archivos que sean de tipo jpg, jpeg, png, gif pasando por un if

- Como hemos dicho antes si el archivo es valido entrara a guardarlo y si no lo es lo que hara será borrarlo

- Para borrarlo importamos una libreria de node llamada fs y como respuesta al if anterior agregamos un else que se encargara de borrar el archivo y dar un mensaje de La extension del archivo no es valida

# Clase 11 #231
### Configurar cabeceras y acceso CORS (Cross-Origin Resource Sharing) en NodeJS

####  Cración del middleware CORS en app.js de routes

- Se ejecutara siempre antes de que se ejecute cualquier ruta, para configurar las cabeceras y pasando a lo siguiente, para que el servidor pueda responder a las peticiones de los clientes

- hemos dejado en el header acceso a todo, pero si fuese alguna pagina especial iría en esa ubicación (// Configurar cabeceras y acceso CORS en NodeJS)