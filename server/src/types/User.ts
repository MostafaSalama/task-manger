import Task from "./Task";
import exp from "constants";

interface User {
    username:string,
    name?:string,
    taskList:Task[],
    email:string,
    hashedPassword:string
}
export default User;
