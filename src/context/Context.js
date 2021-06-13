import React, {useEffect, useState} from "react";

export const Context = React.createContext();

export function Provider(props) {
    let initialState = {
        questions: [],
        score: 0,
        questionsAnswered: 1,
        alreadyAnswered: []
    };

    const count = 0;

    const [state, setState] = useState(initialState);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {
                let options = [];
                data.results.forEach((result, index) => {
                    let data = {
                        question: result.question,
                        options: [...result.incorrect_answers, result.correct_answer],
                        correct: result.correct_answer
                    };
                    options.push(data);
                });
                setState({questions: [...options], score: 0, questionsAnswered: 1, alreadyAnswered: []});
            })
            .catch(err => console.log(err));
    }, [count]);


    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    );
}