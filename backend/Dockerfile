# Set the base image
FROM node:19

# Create a working directory
WORKDIR /usr/src/app

# Install the dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app will run on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
