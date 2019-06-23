import React from "react";
import { QuestionsWrapper } from './QuestionsSectionStyle';
import { Title } from '../eventalkSection/EventalkSectionStyle';
import QuestionList from './questionList/QuestionList';

const QuestionSection = () => {
    return (
        <QuestionsWrapper>
            <Title>
                Have a Questions?
            </Title>
            <QuestionList />
        </QuestionsWrapper>
    );
}

export default QuestionSection;