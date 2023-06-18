import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../contexts/UserContext";

import { Container, StyledLink, ProgressBar } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {

    const [reset, setReset] = useState([]);
    const { percentage, setPercentage, token } = useContext(UserContext);

    useEffect(() => {
        setReset(false);

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then(response => {
            setPercentage(integer(response.data));
        });

        promise.catch((error) => console.log(error.response.data));

    }, [reset, setPercentage, token]);

    function integer(data) {
        if (isNaN(parseInt(data.filter((element) => element.done === true).length / data.length * 100))) {
            return 0;
        } else {
            return parseInt(data.filter((element) => element.done === true).length / data.length * 100)
        }
    }

    return (
        <Container>
            <StyledLink to={"/habits"}>Hábits</StyledLink>
            <StyledLink to={"/today"}>
                <ProgressBar>
                    <CircularProgressbar
                        value={percentage}
                        text="Today"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: '18px',
                            textColor: '#FFF',
                            pathColor: '#FFF',
                            trailColor: 'transparent',
                            backgroundColor: '#52B6FF',
                            textAlign: 'center',
                        })}
                    />
                </ProgressBar>
            </StyledLink>
            <StyledLink to={"/history"}>Históry</StyledLink>
        </Container>
    );
}