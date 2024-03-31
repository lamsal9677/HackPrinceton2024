import React from 'react';
import { useState } from 'react';
import './Summary.css';
import Quiz from '../quiz/quiz';

const Summary = () => {
    const [showQuiz, setShowQuiz] = useState(false);

    const handleQuizButtonClick = () => {
        setShowQuiz(!showQuiz);
    };

    const [showSum, setShowSum] = useState(false);

    const handleSummaryButtonClick = () => {
        setShowSum(!showSum);
    };


    return (
        <div className='summary-container'>
            <h1>Business: Title</h1>
            <div className='videoAndButtons'>
                {/* Lecture Video */}
                <video src="https://www.youtube.com/watch?v=x_58CnqwCSk" controls className='video-section' />
                <div className='quizAndButtons'>
                    {/* Related Articles/Recommendations */}
                    <div className='related-section'>
                        <h2>Related Articles/Recommendations</h2>
                        {/* Add your related articles/recommendations here */}
                    </div>

                    {/* Quiz Button */}
                    <div className='summary-buttons'>
                        <button onClick={handleQuizButtonClick} className='quiz-button'>Quiz</button>

                        {/* PDF Transcribe Button */}
                        <button onClick={handleSummaryButtonClick} className='summarize-pdf-section'>PDF</button>
                    </div>
                </div>
            </div>

            {/* Quiz Component */}
            {showQuiz && <Quiz />}
            {/* Lecture Summary */}
            {showSum &&
                <div className='summarized-bullet-points'>
                    <h2>Lecture Summary</h2>
                    <ul>
                        <li>Summary point 1</li>
                        <li>Summary point 2</li>
                        <li>Summary point 3</li>
                        
                    </ul>
            </div>
            }

        </div>
    );
};


export default Summary;