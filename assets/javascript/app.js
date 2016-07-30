$(document).ready(function(){

	var questions = [{
		question: "Which house was Luna Lovegood in?",
		choices: ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"],
		correctAnswer: 1
	}, {
		question: "Which is NOT a Horcrux?",
		choices:["Ravenclaw Diadem", "Hufflepuff Cup", "Elder Wand", "Harry Potter"],
		correctAnswer: 2
	}, {
		question: "Who was the Half Blood Prince?",
		choices: ["Severus Snape", "Tom Riddle", "Albus Dumbledore", "Harry Potter"],
		correctAnswer: 0
	}, {
		question: "Who taught the Defense Against the Dark Arts class in book 7?",
		choices: ["Severus Snape", "The Carrows", "Horace Slughorn", "Remus Lupin"],
		correctAnswer: 1
	}, {
		question: "Who took Hermoine Granger to the Yule Ball?",
		choices: ["Ron Weasley", "Neville Longbottom", "Harry Potter", "Viktor Krum"],
		correctAnswer: 3
	}, {
		question: "Who was NOT one of the original Marauders?",
		choices: ["Severus Snape", "James Potter", "Sirius Black", "Peter Pettigrew"],
		correctAnswer: 0
	}, {
		question: "What is the location of the Order of the Phoenix?",
		choices: ["Number Four, Privet Dr", "Shell Cottage", "Spinners End", "Number Twelve, Grimmauld Place"],
		correctAnswer: 3
	}, {
		question:"Which character destroyed the last Horcrux?",
		choices: ["Harry Potter", "Ginny Weasley", "Neville Longbottom", "Hermoine Granger"],
		correctAnswer: 2
	}, {
		question: "What animal was in the Chamber of Secrets?",
		choices: ["Hippogriff", "Acromantula", "Basilisk", "Dragon"],
		correctAnswer: 2
	}, {
		question: "Which character gave Harry gillyweed to use in the Goblet of Fire?",
		choices: ["Dobby", "Neville Longbottom", "Hermoine Granger", "Cedric Diggory"],
		correctAnswer: 0
	}];

	var audio = new Audio('assets/audio/HPTheme.mp3');
	
	// audio.play();	

	var timeLimit = 0;
	var timeMax = 26;
	var correct = 0;
	var incorrect = 0;
	var questionCounter = 0;

	$(".resetButton").hide();
	$(".questionBox").hide();
	$(".startButton").click(function(){
		$(".startButton").hide();
		$(".questionBox").show();
		$(".resetButton").show();
		start();
		resetGame();
		audio.play();
	});

	function resetGame(){
		reset();
		correct = 0;
		incorrect = 0;
		questionCounter = 0;
		displayQuestion();
	}

	$(".resetButton").on( "click", function() {
		$(".questionBox").hide();
		$(".resetButton").hide();
		$(".startButton").show();
		stop();
		reset();
		clearFunction();
		
 	});

 	function clearFunction (){
 		$("#question").html("");
		$("#option1").html("");
		$("#option2").html("");
		$("#option3").html("");
		$("#option4").html("");

 	}

	function displayQuestion(){
		$("#question").html(questions[questionCounter].question);
		$("#option1").html(questions[questionCounter].choices[0]);
		$("#option2").html(questions[questionCounter].choices[1]);
		$("#option3").html(questions[questionCounter].choices[2]);
		$("#option4").html(questions[questionCounter].choices[3]);
	}

	function displayGameOver(){
		$("#question").html("Your Score");
		$("#option1").html("Correct Answers: " + correct);
		$("#option2").html("Incorrect Answers:" + incorrect);
		$("#option3").html("");
		$("#option4").html("");


	}

	function handleAnswer(toCheck){
		// check to see if game is already over
		if (questions.length <= questionCounter){
			return;
		}
		if(toCheck === questions[questionCounter].correctAnswer){
			correct++;
		} else {
			incorrect++;
		}
		reset();
		questionCounter++;
		if (questions.length <= questionCounter){
			stop();
			displayGameOver();
		} else {
			displayQuestion();
		}
	}


	$("#option1").on( "click", function() {
		handleAnswer(0);
 	});

	$("#option2").on( "click", function() {
		handleAnswer(1);
 	});

 	$("#option3").on( "click", function() {
		handleAnswer(2);
 	});

	$("#option4").on( "click", function() {
		handleAnswer(3);
 	});








	function start (){
		counter = setInterval(decrement, 1000)
	}
		function decrement(){
			timeLimit--;
			$("#time").html(timeLimit);
			if(timeLimit==0){
				handleAnswer(-1);
			
			}
		}

	function stop(){
		clearInterval(counter);
	}

	function reset(){
		timeLimit = timeMax;
		decrement();
	}



});
