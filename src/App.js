import React  from "react";
import  { useState } from "react";

// accessing the icon components from icon.js file 
import Icon from "./components/icon.js"

// The ToastContainer component is responsible for rendering and managing the toast notifications in your application.
// The toast object is an API provided by react-toastify and By using ToastContainer and toast, you can easily implement and manage toast notifications in your React application.
import {ToastContainer, toast } from 'react-toastify'; 

// The line import 'react-toastify/dist/ReactToastify.css'; is used to import the CSS file provided by the react-toastify library. 
import 'react-toastify/dist/ReactToastify.css';

// The Card, CardBody, Container, Col, and Row components are part of the reactstrap library, which provides pre-built Bootstrap-based components .
import {Card, CardBody, Container,Col, Row, Button} from "reactstrap";

// bootstrap file which is inbuilt in react js
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


// import { FaPen} from "react-icons/fa";
// import { FaPen, FaTimes } from "react-icons/fa";

const itemArray = new Array(9).fill("empty")



const App = ()=>{
    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    // when user hit the buttton , methods will be at initial position and col will be filled up empty form(0-9);
    const reloadGame = ()=> {
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty",0,9);
    };

    const checkIsWinner = ()=>{
        // 
        if (
            itemArray[0] === itemArray[1] &&
            itemArray[0] === itemArray[2] &&
            itemArray[0] !== "empty"
          ) {
            setWinMessage(`${itemArray[0]} won`);
          } else if (
            itemArray[3] !== "empty" &&
            itemArray[3] === itemArray[4] &&
            itemArray[4] === itemArray[5]
          ) {
            setWinMessage(`${itemArray[3]} won`);
          } else if (
            itemArray[6] !== "empty" &&
            itemArray[6] === itemArray[7] &&
            itemArray[7] === itemArray[8]
          ) {
            setWinMessage(`${itemArray[6]} won`);
          } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6]
          ) {
            setWinMessage(`${itemArray[0]} won`);
          } else if (
            itemArray[1] !== "empty" &&
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7]
          ) {
            setWinMessage(`${itemArray[1]} won`);
          } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8]
          ) {
            setWinMessage(`${itemArray[2]} won`);
          } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8]
          ) {
            setWinMessage(`${itemArray[0]} won`);
          } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6]
          ) {
            setWinMessage(`${itemArray[2]} won`);
          }
    };


    const changeItem = itemNumber=>{
        if (winMessage) {
            return toast(winMessage,{type:"success"});
        }
        if(itemArray[itemNumber]==="empty"){
                itemArray[itemNumber] = isCross?"cross" : "circle" 
                setIsCross(!isCross)
        } else{
            return toast("already filled",{type:"error"})
        }

        checkIsWinner();
    };


    return(
        <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    )
    
};



export default App;



// need to be used
// import {ToastContainer, toast } from 'react-toastify';
// import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
