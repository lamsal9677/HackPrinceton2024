import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        // Fetch questions from the backend
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/questions');
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            const existingAnswerIndex = updatedAnswers.findIndex(
                (a) => a.questionId === questionId
            );

            if (existingAnswerIndex !== -1) {
                updatedAnswers[existingAnswerIndex].answer = answer;
            } else {
                updatedAnswers.push({ questionId, answer });
            }

            return updatedAnswers;
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/submit-answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });

            if (response.ok) {
                // Handle successful submission
            } else {
                console.error('Error submitting answers:', response.status);
            }
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    return (
        <div>
            <h1>Quiz</h1>
            {questions.map((question) => (
                <div key={question.id}>
                    <h3>{question.text}</h3>
                    {question.options.map((option) => (
                        <label key={option.id}>
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option.id}
                                onChange={() => handleAnswerChange(question.id, option.id)}
                            />
                            {option.text}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Quiz;