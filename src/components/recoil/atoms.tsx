import { atom } from "recoil";

export const activityState = atom({
    key: 'activityState', // unique ID (with respect to other atoms/selectors)
    default: {
        accessibility: 0,
        activity: '',
        key: "0",
        link: "",
        participants: 1,
        price: 0.1,
        type: ""
    }, // default value (aka initial value)
});