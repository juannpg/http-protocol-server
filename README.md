# HTTP Protocol Project

## Note
This project is developed in Spanish, so some variables are declared in Spanish. For example: 
- `numHijos` refers to the quantity of children (`noChildren`)
- `hijosInput` refers to the text input of the quantity of children (`childrenInput`), and so on.

## Description
This project demonstrates how to create a server that handles the four main HTTP requests using PostgreSQL, Express, Prisma, and Node.js.

## Deployment

1. **Install PostgreSQL:**
   - Using the pgAdmin tool, create a password for the `postgres` user.
   - Create a database named `protocolo-http`.

2. **Setup Environment Variables:**
   - Create a file named `.env` in the `backend` folder with the following content:
     ```
     DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/protocolo-http?schema=public"
     ```
     Replace `PASSWORD` with the actual password you set for the `postgres` user.

3. **Run Migrations and Start Server:**
   - Navigate to the `backend` directory and run:
     ```
     npx prisma migrate dev
     npm run dev
     ```

4. **Start Frontend Server:**
   - Navigate to the `frontend` directory and run:
     ```
     npx live-server
     ```

## Usage
You can create, patch, get, and delete information for all users. To check the complete database, navigate to the `backend` folder and run:
```bash
npx prisma studio
