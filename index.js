let symbolsContainer = document.querySelector(".choices-card");
let blueContainer = document.querySelector(".blue-container");
let yellowContainer = document.querySelector(".yellow-container");
let purpleContainer = document.querySelector(".purple-container");
let btnRules = document.querySelector(".btn-rules");
let rulesContainer = document.querySelector(".rules-container");
let btnClose = document.querySelector(".btn-close ");
let computerScore = document.querySelector(".score1");
let userScore = document.querySelector(".score2");
let userChoice, fightContainer, appendingClass, pcChoice;

// score display
let scoreDisplay = ()=>{
  function getScore(){
   let  uScore = 0;
   let  pcScore = 0;
   console.log(uscore,pcScore);
  }
}


// user choice
blueContainer.addEventListener("click", () => {
  userChoice = "rock";
  newContainer();
});

yellowContainer.addEventListener("click", () => {
  userChoice = "paper";
  newContainer();
});

purpleContainer.addEventListener("click", () => {
  userChoice = "scissors";
  newContainer();
});

// computer random choices

// rules button logic
btnRules.addEventListener("click", () => {
  rulesContainer.style.display = "block";
});
btnClose.addEventListener("click", () => {
  rulesContainer.style.display = "none";
});

// new container creating process
function newContainer() {
  let resultHeading = document.createElement("div");
  resultHeading.className = "result"
  // Hide the symbols container
  symbolsContainer.style.display = "none";

  // Create the fight container
  const fightContainer = document.createElement("div");
  fightContainer.className = "fight-container";

  // Create the heading container
  const headingContainer = document.createElement("div");
  headingContainer.className = "headingContainer";

  // Create the heading text
  const heading1 = document.createElement("div");
  heading1.textContent = "YOU PICKED";
  heading1.className = "heading1";

  const heading2 = document.createElement("div");
  heading2.textContent = "PC PICKED";
  heading2.className = "heading2";

  // Append the heading text to the heading container
  headingContainer.appendChild(heading1);
  headingContainer.appendChild(heading2);

  // Append the heading container to the fight container
  fightContainer.appendChild(headingContainer);

  // Create the image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";

  // Create the user space and PC space containers
  const userSpace = document.createElement("div");
  userSpace.className = "userSpace";

  const pcSpace = document.createElement("div");
  pcSpace.className = "pcSpace";

  // Dynamically generate images based on the user's choice
  if (userChoice === "rock") {
    console.log("userChoice :" + userChoice);

    // Create the rock image and ring image
    const rockImage = document.createElement("img");
    rockImage.src = "images/rock.png";
    rockImage.className = "userChoice1";
    rockImage.alt = "rock";

    const blueRingImage = document.createElement("img");
    blueRingImage.src = "images/Group 2.svg";
    blueRingImage.className = "fightContainer-ellipse";
    blueRingImage.alt = "rock";

    // Append the images to the user space
    userSpace.appendChild(rockImage);
    userSpace.appendChild(blueRingImage);
  } else if (userChoice === "paper") {
    console.log("userChoice :" + userChoice);

    // Create the rock image and ring image
    const paperImage = document.createElement("img");
    paperImage.src = "images/paper.png";
    paperImage.className = "userChoice2";
    paperImage.alt = "paper";

    const yellowRingImage = document.createElement("img");
    yellowRingImage.src = "images/Group 1.svg";
    yellowRingImage.className = "fightContainer-ellipse";
    yellowRingImage.alt = "rock";

    // Append the images to the user space
    userSpace.appendChild(paperImage);
    userSpace.appendChild(yellowRingImage);
  } else {
    console.log("userChoice :" + userChoice);

    // Create the rock image and ring image
    const scissorsImage = document.createElement("img");
    scissorsImage.src = "images/scissors.png";
    scissorsImage.className = "userChoice3";
    scissorsImage.alt = "scissors";

    const purpleRingImage = document.createElement("img");
    purpleRingImage.src = "images/Group 3.svg";
    purpleRingImage.className = "fightContainer-ellipse";
    purpleRingImage.alt = "rock";

    // Append the images to the user space
    userSpace.appendChild(scissorsImage);
    userSpace.appendChild(purpleRingImage);
  }
  // fightContainer.appendChild("appendingClass");
  imageContainer.appendChild(userSpace);

  let random = () => {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoices.length);
    let randomChoice = computerChoices[randomIndex];

    if (randomChoice === "rock") {
      console.log("randomChoice :" + randomChoice);

      // Create the rock image and ring image
      const rockImage = document.createElement("img");
      rockImage.src = "images/rock.png";
      rockImage.className = "pcChoice1";
      rockImage.alt = "rock";

      const blueRingImage = document.createElement("img");
      blueRingImage.src = "images/Group 2.svg";
      blueRingImage.className = "fightContainer-pcEllipse";
      blueRingImage.alt = "rock";

      // Append the images to the user space
      pcSpace.appendChild(rockImage);
      userSpace.appendChild(blueRingImage);
    } else if (randomChoice === "paper") {
      console.log("randomChoice :" + randomChoice);

      // Create the rock image and ring image
      const paperImage = document.createElement("img");
      paperImage.src = "images/paper.png";
      paperImage.className = "pcChoice2";
      paperImage.alt = "paper";

      const yellowRingImage = document.createElement("img");
      yellowRingImage.src = "images/Group 1.svg";
      yellowRingImage.className = "fightContainer-ellipse";
      yellowRingImage.alt = "rock";

      // Append the images to the user space
      pcSpace.appendChild(paperImage);
      pcSpace.appendChild(yellowRingImage);
    } else {
      console.log("randomChoice :" + randomChoice);

      // Create the rock image and ring image
      const scissorsImage = document.createElement("img");
      scissorsImage.src = "images/scissors.png";
      scissorsImage.className = "pcChoice3";
      scissorsImage.alt = "scissors";

      const purpleRingImage = document.createElement("img");
      purpleRingImage.src = "images/Group 3.svg";
      purpleRingImage.className = "fightContainer-ellipse";
      purpleRingImage.alt = "scissors";

      // Append the images to the user space
      pcSpace.appendChild(scissorsImage);
      pcSpace.appendChild(purpleRingImage);
    }

    let calculateResult = (randomChoice, userChoice) => {
      let exp = userChoice;
      switch (exp) {
        case "rock":
          if (exp === "rock" && randomChoice === "scissors") {
            resultHeading.textContent = "YOU WIN AGAINST PC";
          } else if (exp === "rock" && randomChoice === "paper") {
            resultHeading.textContent = "YOU LOSE AGAINST PC";
          } else {
            resultHeading.textContent = "TIE UP";
          }
          break;

        case "paper":
          if (exp === "paper" && randomChoice === "rock") {
            resultHeading.textContent = "YOU WIN AGAINST PC";
          } else if (exp === "paper" && randomChoice === "scissors") {
            resultHeading.textContent = "YOU LOSE AGAINST PC";
          } else {
            resultHeading.textContent = "TIE UP";
          }
          break;

        case "scissors":
          if (exp === "scissors" && randomChoice === "paper") {
            resultHeading.textContent = "YOU WIN AGAINST PC";
          } else if (exp === "scissors" && randomChoice === "rock") {
            resultHeading.textContent = "YOU LOSE AGAINST PC";
          } else {
            resultHeading.textContent = "TIE UP";
          }
          break;
      }
    };
    calculateResult(randomChoice, userChoice);

  };
  random();

 imageContainer.appendChild(resultHeading);
  imageContainer.appendChild(pcSpace);

  // Append the image container to the fight container
  fightContainer.appendChild(imageContainer);
  // Append the fight container to the document body
  document.body.appendChild(fightContainer);
}

