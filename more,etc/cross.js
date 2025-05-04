function Backc(element) {
    let buttons = document.querySelectorAll('.but');
    let div=document.querySelectorAll('.vad');
    let h3=document.querySelectorAll('.cond2');
    if (element.checked) {
      document.body.style.backgroundColor = "#000000";
      buttons.forEach(button => {
        button.querySelector('.txt1').style.color = "#000000";
      });
      div.forEach(div =>{
        div.style.color="#FFFFFF";
      })
      h3.forEach(h3 =>{
        h3.style.color="#FFFFFF";
      })
    }
       else {
      document.body.style.backgroundColor = "#FFFFFF";
      buttons.forEach(button => {
        button.querySelector('.txt1').style.color = "#FFFFFF";
      });
      div.forEach(div =>{
        div.style.color="#000000";
       })
       h3.forEach(h3 =>{
        h3.style.color="#000000";
      })
    }}
let a = new Array(9).fill(0).map(() => new Array(9).fill(0));

function fillRowWithZeros(row) {
    for (let j = 0; j < 9; j++) {
        a[row][j] = 0;
    }
}

function usedInRow(row, num) {
    return a[row].includes(num);
}

function usedInCol(col, num) {
    for (let i = 0; i < 9; i++) {
        if (a[i][col] === num) {
            return true;
        }
    }
    return false;
}

function fillRandomUniqueMatrix() {
    for (let i = 0; i < 9;) {
        let attempts = 0;
        for (let j = 0; j < 9;) {
            let temp = Math.floor(Math.random() * 9) + 1;
            attempts++;
            if (!usedInRow(i, temp) && !usedInCol(j, temp)) {
                a[i][j] = temp;
                j++;
                attempts = 0;
            } else if (attempts > 50) {
                fillRowWithZeros(i);
                j = 0;
                attempts = 0;
            }
        }
        i++;
    }
}

function printAndRandomlyEmptyMatrix() {
    let sudokuTable = document.getElementById("sudokuTable");
    sudokuTable.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.size = 1;
            input.addEventListener("input", function() {
                a[i][j] = parseInt(this.value) || 0;
            });
            if (Math.random() < 0.4) {
                input.value = "";
            } else {
                input.value = a[i][j];
            }
            cell.appendChild(input);
            row.appendChild(cell);
        }
        sudokuTable.appendChild(row);
    }
}

function generateSudoku() {
    fillRandomUniqueMatrix();
    printAndRandomlyEmptyMatrix();
}

function solvePuzzle() {
    solve(); // Solve the Sudoku puzzle
    let sudokuTable = document.getElementById("sudokuTable");
    let isCorrect = true;

    // Check if the user's solution matches the solved puzzle
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let userInput = parseInt(sudokuTable.rows[i].cells[j].querySelector("input").value);
            if (userInput !== a[i][j]) {
                isCorrect = false;
                break;
            }
        }
        if (!isCorrect) {
            break;
        }
    }

    // Display a message to the user based on the correctness of their solution
    if (isCorrect) {
        alert("Congratulations! You solved the Sudoku puzzle correctly!");
    } else {
        alert("Sorry, your solution is incorrect. Keep trying!");
    }
}
function solve() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (a[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValidMove(row, col, num)) {
                        a[row][col] = num;
                        if (solve()) {
                            return true;
                        }
                        a[row][col] = 0; // Backtrack
                    }
                }
                return false;
            }
        }
    }
    return true;
}

generateSudoku();
function centerBox() {
    var box3 = document.getElementById('box3');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var boxHeight = box3.offsetHeight;
    var boxWidth = box3.offsetWidth;
    box3.style.top = Math.round((windowHeight - boxHeight) / 4) + 'px';
    box3.style.left = Math.round((windowWidth - boxWidth) / 4) + 'px';
  }
  window.onload = centerBox;
  window.onresize = centerBox;