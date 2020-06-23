var dataSet = [
    ["", "Tiger Nixon", "@tiger", "tiger@yahoo.com", "51" ],
    [ "","Garrett Winters", "@winters", "winters@ymail.com", "22" ],
    [ "","Ashton Cox", "@cox", "cox@gmail.com", "1562"],
    [ "","Cedric Kelly", "@cedric", "cedric@yahoo.com", "6224"],
    [ "","Airi Satou", "@airi", "airi@gmail.com", "5407" ],
];

let sortedResult=(data)=>{
   let answer =  data.sort((a, b)=>{
        return b[4] - a[4]
    })
    return answer;
}
let sortedData = sortedResult(dataSet);

let overallWinner = document.querySelector('#overallWinner')
overallWinner.innerText = sortedData[0][2]
let overallWinnerScore = document.querySelector('#overallWinnerScore')
overallWinnerScore.innerText = sortedData[0][4]

let overallSecond = document.querySelector('#overallSecond')
overallSecond.innerText = sortedData[1][2]
let overallSecondScore = document.querySelector('#overallSecondScore')
overallSecondScore.innerText = sortedData[1][4]

let overallThird = document.querySelector('#overallThird')
overallThird.innerText = sortedData[2][2]
let overallThirdScore = document.querySelector('#overallThirdScore')
overallThirdScore.innerText = sortedData[2][4]



$(document).ready(function() {
    $('#myTable').DataTable( {
        "scrollX": true,
        data: sortedData,
        columns: [
            {title: "S/N"},
            { title: "Name" },
            { title: "Username" },
            { title: "Email" },
            { title: "Score" },
        ]
    } );
} );

$(document).ready(function() {
    $('#designTable').DataTable( {
        "scrollX": true,
        data: sortedData,
        columns: [
            {title: "S/N"},
            { title: "Name" },
            { title: "Username" },
            { title: "Email" },
            { title: "Score" },
        ]
    } );
} );

$(document).ready(function() {
    $('#frontendTable').DataTable( {
        "scrollX": true,
        data: sortedData,
        columns: [
            {title: "S/N"},
            { title: "Name" },
            { title: "Username" },
            { title: "Email" },
            { title: "Score" },
        ]
    } );
} );

$(document).ready(function() {
    $('#backendTable').DataTable( {
        "scrollX": true,
        data: sortedData,
        columns: [
            {title: "S/N"},
            { title: "Name" },
            { title: "Username" },
            { title: "Email" },
            { title: "Score" },
        ]
    } );
} );


  