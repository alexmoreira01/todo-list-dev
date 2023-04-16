import { TodoList } from "../../styles";
import { TodosListEmptyContainer, TodosListEmptySvg } from "./styles";
import { Clipboard } from "phosphor-react";

export function ListTodosEmpty() {
    return (
        <TodoList>
            <table >
                <thead >
                    <tr>
                        <th>Título</th>
                        <th>Url</th>
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
                        Não existem todos salvos
                        <span>Salve suas todos aqui</span>
                    </p>
                </div>

            </TodosListEmptyContainer>

        </TodoList>
    )
}