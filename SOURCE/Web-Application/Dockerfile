FROM node:lts 

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

COPY ./src/ ./src/
COPY ./src/GUI/views ./dist/GUI/views

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "serve" ]