import { container } from "tsyringe";

import { TodoRepository } from "../../application/repositories/todos-repository-interface";
import { PrismaTodosRepository } from "../database/prisma/repositories/prisma-todos-repository";

container.registerSingleton<TodoRepository>(
    "TodosRepository",
    PrismaTodosRepository
)