
import React, { useState } from 'react';

export default function App() {


  function refreshPage() {
    window.location.reload(false);   //refresh the quiz on clicking button,refreshPage refresh the quiz
  }


	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Delhi', isCorrect: true },
				{ answerText: 'Mumbai', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Founder of Techy Satyam?',
			answerOptions: [
				{ answerText: 'Satyam Gupta', isCorrect: true  },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Who is best the Tech Youtuber in India?',
			answerOptions: [
				{ answerText: 'Geeky Ranjit', isCorrect: false },
				{ answerText: 'Techy Satyam', isCorrect: true  },
				{ answerText: 'Tech Burner', isCorrect: false },
				{ answerText: 'Technical Gruji', isCorrect: false},
			],
		},
	];

const [currentQuestion, setCurrentQuestion] = useState(0);  	// questions will be start from zero and also it's currentQuestion variable who putting the question
	
   const [showScore, setShowScore] = useState(false);  //showScore,this show score after the quiz is ended ,useState(false)=> after the end of the question that not show another questions
	
   const [score, setScore] = useState(0);  //from this line ,default value of score will be zero,useState(0).

	const handleAnswerOptionClick = (isCorrect) => {   //handleAnswerOptionClick,this fuction help into jump the next question after clicking the button
		if (isCorrect)  //if user pick the right answer then ,score will be incremented .
    {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
  

    // ----------------
		<div className='app'>
      
			{showScore ?      //if option is right which is choose by user, then display the score
      (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}    {/* {currentQuestion + 1}  value,where user is present,ex-2/4,here user is in second question*/}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> // isCorrect is used to store true / false value 
						))}
					</div>
				</>
			)}

     <div>
     
      <button onClick={refreshPage}>Reset!</button>  {/*refresh the quiz on clicking button */}
      
    </div>

      
       
		</div>
    
	);
}























