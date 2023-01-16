import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activityState } from "./recoil/atoms";
import { Card } from "react-bootstrap";


export const ActivityInfo: React.FC = () => {
    const activity = useRecoilValue(activityState);
    console.log(activity)
    return (
        <Card data-testid='activity-info'>
            <Card.Title>{activity.activity}</Card.Title>
            <Card.Body>
                <Card.Text>
                    accessibility: {activity.accessibility}
                </Card.Text>
                <Card.Text>
                    key: {activity.key}
                </Card.Text>
                <Card.Text>
                    link: {activity.link}
                </Card.Text>
                <Card.Text>
                    participants: {activity.participants}
                </Card.Text>
                <Card.Text>
                    price: {activity.price}
                </Card.Text>
                <Card.Text>
                    type: {activity.type}
                </Card.Text>
            </Card.Body>

            {/* accessibility: 0,
        activity: '',
        key: "0",
        link: "",
        participants: 1,
        price: 0.1,
        type: "" */}
        </Card>

    )
}