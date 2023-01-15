import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activityState } from "./recoil/atoms";


export const ActivityInfo: React.FC = () =>{
    const activity = useRecoilValue(activityState);
    console.log(activity)
    const test = 3
    return(
        <div data-testid='activity-info'>
            <h1>{activity.activity}</h1>
            {/* <h1>{test}</h1> */}
        </div>
    
    )
}