import * as React from "react";
import * as ReactDOM from "react-dom";

import './styles.scss';
import { DayOfChristList } from "./components/DayOfChristList";

fetch('25-days-of-christ.json')
    .then(response => response.json())
    .then(days => ReactDOM.render(
        <DayOfChristList days={days} />,
        document.getElementById("daysofchrist")
    ));
