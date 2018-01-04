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

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
