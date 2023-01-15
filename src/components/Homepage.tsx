// import { JsxElement } from "typescript";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { ActivityInfo } from "./ActivityInfo";


export const Homepage: React.FC = () => {
    return (
        <Container data-testid='home-page'>
            <h1>So, you're bored??</h1>
            <Button data-testid='activity-button'>
                Click this to find somthing fun to do!
            </Button>
            <ActivityInfo/>
        </Container>
    )
}