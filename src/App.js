
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

const [currentQuestion, setCurrentQuestion] = useState(0);  	// questions hamse zero se start karega and currentQuestion variable hai jo question dal raha hai
	
   const [showScore, setShowScore] = useState(false);  //showScore,quiz end hone ke baad score show karega ,useState(false)=> ek question ke baad answer nahi show karan hai,isi liye
	
   const [score, setScore] = useState(0);  // Is line se ,score ke defaul value zero hogi by,useState(0).

	const handleAnswerOptionClick = (isCorrect) => {   //handleAnswerOptionClick ye fuction option ke button par click hone par next question par le jaye ga
		if (isCorrect)  //agar sahi option user chuna then ,score ko increment kar, this line says.
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
      
			{showScore ?      //agar user ka option sahi, uska  score display kar degi
      (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}    {/* {currentQuestion + 1}  kis question par user hai uski value batyega,ex-2/4,here user is in second question*/}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> //yaha isCorrect ka use true / false value ko store karne ke liya hua hai
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























