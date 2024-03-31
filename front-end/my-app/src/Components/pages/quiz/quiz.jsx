import React, { useState, useEffect } from 'react';
import './quiz.css';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        // Fetch questions from the backend
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/test.json');
                const data = await response.json();
                setQuestions(data.questions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        // Extract the first character of the answer and convert it to lowercase
        const selectedOption = answer.trim().charAt(0).toLowerCase();

        // Check if the selected option is 'a', 'b', 'c', or 'd' before updating state
        if (['a', 'b', 'c', 'd'].includes(selectedOption)) {
            setAnswers((prevAnswers) => ({
                ...prevAnswers,
                [questionId]: selectedOption
            }));
        }
    };

    const handleSubmit = async () => {
        try {
            console.log('Answers before submitting:', answers); // Add this line for debugging
            const response = await fetch('http://127.0.0.1:5000/check_answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });
    
            if (response.ok) {
                // Handle successful submission
                console.log('Answers submitted successfully');
            } else {
                console.error('Error submitting answers:', response.status);
            }
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    return (
        <div className='quiz-container'>
            <h1>Quiz</h1>
            {questions.map((question) => (
                <div key={question.questionID}>
                    <h3 className='question'>{question.question}</h3>
                    <div className='answer'>
                        {question.choices.map((choice, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name={`question-${question.questionID}`}
                                    value={choice}
                                    onChange={() => handleAnswerChange(question.questionID, choice)}
                                />
                                {choice}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <button className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Quiz;
