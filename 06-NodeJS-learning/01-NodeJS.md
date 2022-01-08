# NodeJS

## Introducción

- Primeros pasos
- Conexion a la BD de MongoDB desde NodeJS
- Creación de Servidor
- Postman
- Modelos de datos
- Controladores y rutas
- Proceso de Subida de Archivos 
- Front-end con Angular

# Creación de backend con NodeJS

- Revisamos que este instalado nodeJS
```
node -v
```
- Entramos a la carpeta del proyecto y ya podemos llamar a cualquier archivo de este proyecto
```
node nombre_archivo.js + parametros
```

## Calculadora

- Creación de una calculadora básica
- Recolección de datos con:
```
let datosRecogidos = process.argv.slice(2);
```

## Dependencias

Todas las dependencias instaladas serán almacenadas en el package.json
- Express
- Body-Parser
- Conect-multiparty
- Mongoose
- Nodemon