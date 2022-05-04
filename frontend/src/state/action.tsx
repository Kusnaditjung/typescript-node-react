import { Token } from "../common/types";

enum ActionType {
    Login,
    Logout,
}



type Action = 
| {type : ActionType.Login , token : Token }
| {type : ActionType.Logout }


export { ActionType};
export type {Action};