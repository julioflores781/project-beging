FROM node:18.15.0

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app/
EXPOSE 5173


CMD ["npm", "run", "start"]
