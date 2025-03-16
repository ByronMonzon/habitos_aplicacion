# Gestión de Hábitos

## Descripción

La aplicación **Gestión de Hábitos** permite a los usuarios gestionar y seguir sus hábitos diarios. El objetivo es ayudar a desarrollar buenos hábitos o eliminar malos hábitos a través de un seguimiento sencillo y eficiente.

## Tecnologías

La aplicación está desarrollada con las siguientes tecnologías:

- **Frontend**: 
  - [Next.js](https://nextjs.org/) - Framework React para crear interfaces de usuario.
  - [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
  - [Redux Toolkit](https://redux-toolkit.js.org/) - Herramienta para manejar el estado global de la aplicación.
  - [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para un diseño rápido y flexible.

- **Backend**:
  - [Express.js](https://expressjs.com/) - Framework web para Node.js.
  - [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL para almacenar los hábitos de los usuarios.
  - [Mongoose](https://mongoosejs.com/) - Librería para modelar datos de MongoDB en Node.js.
  - [dotenv](https://www.npmjs.com/package/dotenv) - Módulo para cargar variables de entorno.

## Requerimientos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** v16 o superior: [Descargar Node.js](https://nodejs.org/)
- **MongoDB Atlas**: [Crea una cuenta en MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para obtener una base de datos en la nube.
- **Postman** (opcional): Herramienta útil para probar los endpoints de la API. [Descargar Postman](https://www.postman.com/)

## Instala las dependencias:

cd (nombre de la carpeta)
npm install

Configura las variables de entorno: Crea un archivo .env en la carpeta del servidor con el siguiente contenido:

MONGO_URI=tu_conexion_mongodb_atlas
PORT=3001

Inicia el servidor:

npm start

Abre el navegador en http://localhost:3001

Para iniciar el frontend usa: npm run dev
