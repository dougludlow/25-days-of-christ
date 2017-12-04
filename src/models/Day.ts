export interface Day {
    day: number,
    title: string,
    scriptures: [{
        reference: string;
        url: string;
    }]
    pictures: [{
        title: string,
        url: string
    }],
    videos: [{
        title: string,
        url: string
    }]
}
