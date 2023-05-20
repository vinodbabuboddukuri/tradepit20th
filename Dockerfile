# Stage 1 - Build Node.js Application
FROM node:13 AS build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -force
RUN node node_modules/node-sass/scripts/install.js
RUN npm rebuild node-sass

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build

# Stage 2 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
