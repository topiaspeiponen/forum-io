FROM node:21-bullseye-slim

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npm", "run" "build"]
CMD ["node", "server.js"]