FROM node

WORKDIR /app
# Kopirovani vseho do složky /app 
COPY * /app

RUN npm install

CMD npm run
