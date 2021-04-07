
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";
function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ?  Sender : Reciever;
    return (
        <Container>
            <TypeOfMessage>
                { message.message }
                <Timestamp>{message.timestamp ? moment(message.timestamp).format("LT") : "..."}</Timestamp>
            </TypeOfMessage>
        </Container>
    )
}

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
    width: fit-content;
    padding: 15px;
    border-radius: 15px;
    margin: 10px;
    min-width: 60px;
    padding-bottom: 26px;
    position: relative;
    text-align: right;
`;

const Sender = styled(MessageElement)`
    color: white;
    margin-left: auto;
    background-color: #239691;

`;

const Reciever = styled(MessageElement)`
    color: white;
    text-align: left;
    background-color: #343434;
`;

const Timestamp = styled.span`
    color: #E1E1E1;
    padding: 9px;
    font-size: 10.6px;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
`;
