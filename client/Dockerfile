FROM node:10

LABEL version="1.0"
LABEL description="This is the base docker image for the gps ads frontend react app."
LABEL maintainer = ["makunomark@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]