import * as React from 'react';
import { Day } from '../models/Day';
import { DayOfChrist } from './DayOfChrist';

export interface DayOfChristListProps {
    days: Day[]
}

export class DayOfChristList extends React.Component<DayOfChristListProps, {}> {
    render() {
        return this.props.days.map(x => {
            return <DayOfChrist data={x} key={x.day} />
        });
    }
}
