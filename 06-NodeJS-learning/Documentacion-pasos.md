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