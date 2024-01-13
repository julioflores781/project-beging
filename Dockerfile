# Usa la imagen oficial de Node.js v18.15.0 como base
FROM node:18.15.0

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y yarn.lock (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación
COPY . /app/

# Exponer el puerto 3000 (puerto por defecto utilizado por Vite)
EXPOSE 5173

# Comando para iniciar la aplicación Vite en modo desarrollo
CMD ["npm", "run", "dev"]
