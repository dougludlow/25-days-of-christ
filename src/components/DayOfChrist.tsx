import * as React from 'react';
import { QrCode } from "./QrCode";
import { Day } from '../models/Day';

export interface DayOfChristProps {
    data: Day;
}

const styles = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    font: 'Georgia, serif'
};

export class DayOfChrist extends React.Component<DayOfChristProps, {}> {
    render() {
        return <div className="day-of-christ" style={styles}>
            <div className="pictures">
                {this.props.data.pictures.map(x => <QrCode text={x.url} key={x.url} />)}
            </div>
            <div className="main">
                <span className="day">Day {this.props.data.day}</span>
                <span className="title">{this.props.data.title}</span>
                <div className="scriptures">
                    {this.props.data.scriptures.map((x, i) => <span key={x.url}>
                        {!!i && ", "}
                        <a href={x.url}>{x.reference}</a>
                    </span>)}
                </div>
            </div>
            <div className="videos">
                {this.props.data.videos.map(x => <QrCode text={x.url} key={x.url} />)}
            </div>
        </div>
    }
}
