FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install --only=production
ENV PORT 8080
EXPOSE 8080
ENTRYPOINT ["npm", "start"]