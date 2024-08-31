// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text } from '@chakra-ui/react';
import Highlighted from './Highlights';
import Topic from './Topic';

const Result = ({ transcript }) => {
    return (
        <div>
            <Text>
                {transcript.sentiment_analysis_results.map((result, index) => (
                    <Highlighted
                        key={index}  // Adding a key prop to avoid React's key warning
                        text={result.text}
                        sentiment={result.sentiment}
                        entities={transcript.entities}
                    />
                ))}
            </Text>
            <Topic transcript={transcript} />
        </div>
    );
}

export default Result;
