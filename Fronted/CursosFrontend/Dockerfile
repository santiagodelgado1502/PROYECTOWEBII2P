FROM node
COPY . /var/www
WORKDIR /var/www    
RUN npm install
EXPOSE 4200
ENTRYPOINT ["npm", "start"]