import NextQuestion from "../components/NextQuestion";
import QuestionsAnswered from "../components/QuestionsAnswered";
import Score from "../components/Score";
import React from "react";

const UI = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex align-items-start flex-column">
                    <div className="p-2"> <QuestionsAnswered /></div>
                    <div className="p-2"> <Score /></div>
                </div>

            </div>
            <div className="card-body">
                {props.children}
            </div>
            <div className="card-footer text-lg-end">
                <div className="d-flex align-items-end flex-column">
                    <div className="p-2"> <NextQuestion /></div>
                </div>
            </div>
        </div>
    );

}

export default UI;