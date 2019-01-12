# Proyecto wall Front #

***Componenetes***

```
Proyecto
│   App.js
│
└───Componentes
    │   
    │
    └───home
    │   │   Home.js
    │   │
    │   └───post
    │   │      Post.js
    │   │
    │   └───navbar
    │   │      Nabvar.js
    │   │
    │   └───inputPost
    │         InputPost.js
    │   
    └───comments
    │       Comments.js
    │       Comment.js
    │       InputComment.js
    │
    └───user
    │       Users.js
    │       User.js
    │       InputUser.js
```



***App***
> Mantiene la lógica de las rutaas

***Home***
>Mantiene la lógica de el index (la ruta raiz). Manda a llamar el componente "Post" y lo pinta n cantidad de veces según lo que traiga la petición a el backend y pinta el componente InputPost para poder crearlos.

***Users***
>Mantiene la lógica de todo lo relacionado con la url "/users". Mada a llamar el componente "User" y lo pinta n cantidad de veces según lo que traiga la peticón a el backend y pinta el componente InputUser para poder crearlos.

***Comments***
>Mantiene la lógica de todo lo relacionado con la url "/comment". Mada a llamar el componente "Comment" y lo pinta n cantidad de veces según lo que traiga la peticón a el backend y pinta el componente InputComment para poder crearlos.