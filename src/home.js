import React, { useEffect } from "react";
import firstlabel from './images/first_label.jpg'
import secondlabel from './images/second_label.gif' 
import thirdlabel from './images/third_label.jpg'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import "./home.css"
const fetch = require('node-fetch')


const mystyle = {
  backgroundColor: "black",
  fontFamily: "Arial",
  justify_content: "center",
};

function Home() {
  useEffect(() => {
    const appId =
      "5a36746b7a4b4a7a474e31783939395a323363436b6e37416c75424531547059";
    const appSecret =
      "38306e436a44543770784c335944744a74316f416b2d32307a763562714770455f64505a6a5f36394959524b71474847336d36484b416e4d5931727245317430";

    const url = "https://api.symbl.ai/oauth2/token:generate";
    const authOption = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "application",
        appId: appId,
        appSecret: appSecret,
      }),
    };

    fetch(url, authOption)
      .then((response) => response.json())
      .then((realData) =>
        window.localStorage.setItem("auth", realData.accessToken)
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <>
      <div style={{ padding: "50px" }}>
        <h5>
          Using an AI powered conversation intelligence platform{" "}
          <a href="https://symbl.ai" className="text-decoration-none text-info">
            Symbl.ai
          </a>{" "}
          , we have developed a platform where user can :
        </h5>
      </div>

      <Carousel style={mystyle}>
        <Carousel.Item>
          <img
            className="d-inline w-90 "
            style={{ height: "600px"}}
            src={firstlabel}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> <a href="/transcript">Video Transcriber</a> </h3>
            <p>A tool to convert video to text.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline w-90"
            style={{ height: "600px" }}
            src={secondlabel}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 > <a href="/discord_bot">Discord bot</a></h3>
            <p>Add this bot to your server anytime, and then enjoy the transcriber.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline w-90" 
            style={{ height: "600px" }}
            src={thirdlabel}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Chatbot</h3>
            <p>
             Have virtual convesation with the chatbot.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </>
  );
}

export default Home;
