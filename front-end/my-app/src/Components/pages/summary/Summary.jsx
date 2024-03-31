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
                <iframe src="https://www.youtube.com/embed/x_58CnqwCSk" title="Lecture Video" className='video-section' allowFullScreen />
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
                        <li> Stress is a normal part of life and can have both positive and negative impacts on us.</li>
                        <li> Coping with stress effectively can lead to a sense of pride and motivation.</li>
                        <li> Excessive and prolonged stress can result in various physical and emotional consequences.</li>
                        <li>Taking care of our mental and physical well-being is essential in managing stress.</li>
                        <li>Training our bodies and minds can help us cope with stress and benefit both ourselves and those around us."</li>
                    </ul>
            </div>
            }

        </div>
    );
};


export default Summary;