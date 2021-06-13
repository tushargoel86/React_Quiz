import UI from "./ui/UI";
import Question from "./components/Question";
import { Provider } from "./context/Context";

function App() {
    return (
        <Provider>
            <div className="container-md mt-5" style={{ width: '30%'}}>
                <UI>
                    <Question />
                </UI>
            </div>
        </Provider>
    );
}

export default App;
