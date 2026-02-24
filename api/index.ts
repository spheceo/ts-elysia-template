import { Elysia } from "elysia";
import { file } from 'bun'

const app = new Elysia()

app.get('/favicon.ico', () => file('./public/favicon.ico'))

app.get("/", () => "Welcome to {{ project_name }}!")

export default app;