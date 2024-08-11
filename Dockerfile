FROM node

WORKDIR /app
# Kopirovani vseho do složky /app 
COPY package.json package.json
COPY package-lock.json package-lock.json

COPY . .

RUN npm install

EXPOSE 4000

CMD npm run run
