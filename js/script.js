var dataSet = [
    ["", "Tiger Nixon", "@tiger", "tiger@yahoo.com", "51", ['frontend', 'backend', 'design'] ],
    [ "","Garrett Winters", "@winters", "winters@ymail.com", "22", ['frontend'] ],
    [ "","Ashton Cox", "@cox", "cox@gmail.com", "1562", ['backend', 'design']],
    [ "","Cedric Kelly", "@cedric", "cedric@yahoo.com", "6224", ['frontend', 'backend', 'design']],
    [ "","Airi Satou", "@airi", "airi@gmail.com", "5407", ['frontend', 'backend', 'design'] ],
];

let sortedResult=(data)=>{
   let answer =  data.sort((a, b)=>{
        return b[4] - a[4]
    })
    return answer;
}

let sortedData = sortedResult(dataSet);
let designResult = Array.from(sortedData)
let frontendResult = Array.from(sortedData)
let backendResult = Array.from(sortedData)


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


let firstInDesign = document.querySelector('#firstInDesign')
firstInDesign.innerText = designResult[0][2]
let firstInDesignScore = document.querySelector('#firstInDesignScore')
firstInDesignScore.innerText = designResult[0][4]

let secondInDesign = document.querySelector('#secondInDesign')
secondInDesign.innerText = designResult[1][2]
let secondInDesignScore = document.querySelector('#secondInDesignScore')
secondInDesignScore.innerText = designResult[1][4]

let thirdInDesign = document.querySelector('#thirdInDesign')
thirdInDesign.innerText = designResult[2][2]
let thirdInDesignScore = document.querySelector('#thirdInDesignScore')
thirdInDesignScore.innerText = designResult[2][4]


let firstInFrontend = document.querySelector('#firstInFrontend')
firstInFrontend.innerText = frontendResult[0][2]
let firstInFrontendScore = document.querySelector('#firstInFrontendScore')
firstInFrontendScore.innerText = frontendResult[0][4]

let secondInFrontend = document.querySelector('#secondInFrontend')
secondInFrontend.innerText = frontendResult[1][2]
let secondInFrontendScore = document.querySelector('#secondInFrontendScore')
secondInFrontendScore.innerText = frontendResult[1][4]

let thirdInFrontend = document.querySelector('#thirdInFrontend')
thirdInFrontend.innerText = frontendResult[2][2]
let thirdInFrontendScore = document.querySelector('#thirdInFrontendScore')
thirdInFrontendScore.innerText = frontendResult[2][4]


let firstInBackend = document.querySelector('#firstInBackend')
firstInBackend.innerText = backendResult[0][2]
let firstInBackendScore = document.querySelector('#firstInBackendScore')
firstInBackendScore.innerText = backendResult[0][4]

let secondInBackend = document.querySelector('#secondInBackend')
secondInBackend.innerText = backendResult[1][2]
let secondInBackendScore = document.querySelector('#secondInBackendScore')
secondInBackendScore.innerText = backendResult[1][4]

let thirdInBackend = document.querySelector('#thirdInBackend')
thirdInBackend.innerText = backendResult[2][2]
let thirdInBackendScore = document.querySelector('#thirdInBackendScore')
thirdInBackendScore.innerText = backendResult[2][4]

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


  