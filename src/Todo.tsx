import { TodoType } from "./types/todo";
import { VFC } from "react";

//    Pick => 必要なものを抽出
//     props: Pick<TodoType, "userId" | "title" | "completed">
// ) => {
//    Omit => 不要なものを抽出
// props: Omit<TodoType, "id">

export const Todo: VFC<Omit<TodoType, "id">> = (
    props
) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "Good" : "Bad"

    return <p>
        {`${completeMark} >> ${title}(UseName:${userId})`}
    </p>
}