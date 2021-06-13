import { useContext } from 'react';
import { Context } from "../context/Context";

const Score = (props) => {
    const [state] = useContext(Context);
    return `Total Score: ${state.score}`;
}

export default Score;