// function copyClipBoard() {
//     var copyText = document.getElementById("output-box");
//     copyText.select();
//     try {
//         var successful = document.execCommand('copy');
//         var message = successful ? 'successful' : 'unsuccessful';
//         console.log("Text copy was " + message);
//     }
//     catch (err) {
//         console.log("There was an error while copying");
//     }
// }

document.getElementById('output-board').click(function () {
    document.getElementById(this).CopyToClipboard();
});

