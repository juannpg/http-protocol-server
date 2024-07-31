# HTTP PROTOCOL PROYECT

## Description 

This is a project whose purpose is to teach how to make a server with the four possible HTTP requests with postgreSQL express, prisma, and node js.

## Deployment

The first thing we must do is install postgreSQL, and from the pgAdmin tool, create a database with the name "protocolo-http". Then create a file named ".env" in the "hijosback" folder, and type this:
```
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/protocolo-http?schema=public"
```
Then, on the same directory, run:
```
npx prisma migrate dev
npm run dev
```

Finally, we will have to go to the "hijosfront" directory, and run:
```
npx live-server
```

## Usage
Now, you can create, patch, get and delete information for all users. To check the complete  database, you will just have to go to the "hijosback" folder, and run:
```
npx prisma studio
```
