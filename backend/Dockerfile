FROM node:10

LABEL version="1.0"
LABEL description="Base docker image for the backend of gps ads"
LABEL maintainer = ["makunomark@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 5000

CMD ["node", "backend.js"]