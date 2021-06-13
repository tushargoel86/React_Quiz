import { useContext } from "react";
import { Context } from "../context/Context";

const QuestionsAnswered = (props) => {
    const [ state ] = useContext(Context);
    let { questions, questionsAnswered } = state;
    return "Questions: " + questionsAnswered + "/" + questions.length;
}

export default QuestionsAnswered;