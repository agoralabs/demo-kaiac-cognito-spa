# Choose the Image which has Node installed already
FROM 041292242005.dkr.ecr.us-west-2.amazonaws.com/node:14.20

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install project dependencies
RUN npm install

EXPOSE 8081

CMD [ "npm", "start"]