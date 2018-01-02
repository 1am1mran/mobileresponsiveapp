function myFunction() {
    var inputBoardVal = document.getElementById("input-board").value;
    var inputBoard = inputBoardVal.replace(/,/g, '\n');
    var outputBoard = document.getElementById("output-board").querySelectorAll("p");
    for (var i = 0; i < outputBoard.length; i++) {
        outputBoard[i].innerHTML = inputBoard;
        // if (inputBoard[i] == '\n') {
        //     outputBoard.split("\n");
        // }
    }

}