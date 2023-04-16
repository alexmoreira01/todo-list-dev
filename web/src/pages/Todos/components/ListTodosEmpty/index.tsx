import { TodoList } from "../../styles";
import { TodosListEmptyContainer, TodosListEmptySvg } from "./styles";
import { Clipboard } from "phosphor-react";

export function ListTodosEmpty() {
    return (
        <TodoList>
            <table >
                <thead >
                    <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Data</th>
                        <th> </th>
                    </tr>
                </thead>
            </table>

            <TodosListEmptyContainer >
                <div>

                    <TodosListEmptySvg>
                        <Clipboard size={60} />
                    </TodosListEmptySvg>
                    <p>
                        Não existem tarefas salvas
                        <span>Salve suas tarefas aqui</span>
                    </p>
                </div>

            </TodosListEmptyContainer>

        </TodoList>
    )
}