import React from 'react';
import { List, ListItem, ListItemText } from './QuestionListStyle';

const listData = [
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        content: "203 Fake St. Mountain View, San Francisco, California, USA"
    },
    {
        icon: <i className="fas fa-phone"></i>,
        content: "+2 392 3929 210"
    },
    {
        icon: <i className="fas fa-envelope"></i>,
        content: "@yourdomain.com"
    }
]

const listItems = listData.map((item, index) => {
    return <ListItem key={index}>{item.icon}<ListItemText children={item.content} /></ListItem>
})

const QuestionList = () => {
    return (
        <List>
            {listItems}
        </List>
    );
}

export default QuestionList;