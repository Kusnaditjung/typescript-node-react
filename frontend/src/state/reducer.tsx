import { Action, ActionType } from "./action";
import { AppState } from "../common/types";

const reducer = (state : AppState = { token: undefined } , action: Action): AppState => {

    switch (action.type) {
        case ActionType.Login:
            return { token : action.token};
        case ActionType.Logout:
            return { token : undefined };       
        default:
            return state;
    }
}

export default reducer;
 