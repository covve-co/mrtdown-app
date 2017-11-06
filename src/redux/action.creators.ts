import * as constants from "./action.constants";

function addQuestionsToState(object: any) {
    return {
        type: constants.SAVE_QUESTIONS,
        data: object,
    };
}

export default { addQuestionsToState };
