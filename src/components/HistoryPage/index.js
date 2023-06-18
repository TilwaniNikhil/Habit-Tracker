import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { DefaultMessage } from "../generic/DefaultMessage";
import Menu from "../generic/Menu";
import { Title } from "../generic/Title";
import TopBar from "../generic/TopBar";
import { Container, Header } from "./style";

export default function HistoryPage() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <TopBar user={user} />
      <Header>
        <Title>Históry</Title>
      </Header>
      <DefaultMessage>
        Soon you will be able to see the history of your habits here!
      </DefaultMessage>
      <Menu />
    </Container>
  );
}
