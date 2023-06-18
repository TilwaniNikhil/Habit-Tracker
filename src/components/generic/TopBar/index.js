import { useContext } from "react";
import Logo from "../../../assets/img/smallLogo.png"
import UserContext from "../../../contexts/UserContext";

import profile from "../../../assets/img/profile.jpg"
import { Container, UserImg } from "./style";

export default function TopBar() {

    const { user } = useContext(UserContext);

    return (
        <Container>
            <img src={Logo} alt="trackit small logo" />
            <UserImg src={profile} />
        </Container>
    );
}