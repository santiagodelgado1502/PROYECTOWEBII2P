#Imagen de node
FROM node
#Copiar archivo a una carpeta definida
COPY . /promocion
#Definir carpeta de trabajo
WORKDIR /promocion
#Instalar depencia
RUN npm install --only=production
#Puerto
ENV PORT 5000
#Exponer puerto para el servicio
EXPOSE 5000
#Comandos para ejecutar el proyecto
ENTRYPOINT ["npm", "start"]
