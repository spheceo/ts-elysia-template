import { Elysia } from "elysia";

const app = new Elysia()

app.get("/", () => "Welcome to {{ project_name }}!")

export default app;