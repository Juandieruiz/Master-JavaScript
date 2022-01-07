# Comandos Windows MongoDB

### Creación de nueva base de datos
```
use nombre_de_database
```

### Agregar datos
```
db.bookmarks.save({id:1, title:'Learning MongoDB', description:'Lets go to Dev in Mean Stack'});
```
(Cuando el dato ha sido enviado, recibiremos un [WriteResult({"nInserted":1})])

### Revisar Bases de Datos 
```
show dbs
```

### Encontrar Registros en nuestra Colección de Objetos bookmarks
```
db.bookmarks.find();
```

