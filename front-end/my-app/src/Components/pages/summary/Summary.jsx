import React from 'react';
import './Summary.css';

const Summary = () => {
    const handleQuizButtonClick = () => {
        // Add logic to handle quiz button click
    };

    const handlePdfTranscribeButtonClick = () => {
        // Add logic to handle PDF transcribe button click
    };

    return (
        <div className='summary-container' >
            <div className='videoAndButtons'>
                {/* Lecture Video */}
                <video src="path_to_lecture_video" controls className='video-section'/>
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
                        <button onClick={handlePdfTranscribeButtonClick} className='summarize-pdf-section'>PDF</button>
                    </div>
                </div>
            </div>
            {/* Lecture Summary */}
            <div className='summarized-bullet-points'>
                <h2>Lecture Summary</h2>
                <ul>
                    <li>Summary point 1</li>
                    <li>Summary point 2</li>
                    <li>Summary point 3</li>
                    {/* Add more summary points as needed */}
                </ul>
            </div>

            
        </div>
    );
};

export default Summary;