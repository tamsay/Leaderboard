var dataSet = [
    {
        "sn": "",
        "name": "Ram",
        "score": {
            design: 10,
            frontend: 21,
            backend: 20
        },
        "username": "@ramsey",
        "email": "ram@gmail.com",
        "track": ['Frontend', 'Backend']
    },
    {
        "sn": "",
        "name": "Ninja",
        "score": {
            design: 35,
            frontend: 41,
            backend: 10
        },        
        "username": "@ninja",
        "email": "ninja@gmail.com",
        "track": ['Frontend', 'Design']
    },
    {
        "sn": "",
        "name": "Rani",
        "score": {
            design: 20,
            frontend: 21,
            backend: 50
        },        
        "username": "@rani",
        "email": "ranieee@gmail.com",
        "track": ['Backend', 'Design']
    },
    {
        "sn": "",
        "name": "Johan",
        "score": {
            design: 15,
            frontend: 61,
            backend: 50
        },        
        "username": "@johan",
        "email": "johan@gmail.com",
        "track": ['Frontend', 'Design']
    },
    {
        "sn": "",
        "name": "Shajia",
        "score": {
            design: 20,
            frontend: 21,
            backend: 20
        },
        "username": "@shajia",
        "email": "shajia@gmail.com",
        "track": ['Design', 'Backend'],
    }
];

let frontendResult = []
let backendResult = []
let designResult = []
let finalResult = [];

let getTotalScores=(array)=>{
    array.map(element=>{
        let totalScore = element.score.design + element.score.frontend + element.score.backend;
        element.total = (totalScore);
        finalResult.push(element)
    })
}
getTotalScores(dataSet)

let filterResult =(array, item1, item2, item3)=>{
    array.map(element=>{
        if( (element.track.join(' ').toLowerCase()).includes(item1)){
            frontendResult.push(element)
        }
        if( (element.track.join(' ').toLowerCase()).includes(item2)){
            backendResult.push(element)
        }
        if( (element.track.join(' ').toLowerCase()).includes(item3)){
            designResult.push(element)
        }
    })
}
filterResult(finalResult, 'frontend', 'backend', 'design');


 let sortedTotal = finalResult.sort((a, b)=> b.total - a.total)
 let sortedDesign = designResult.sort((a, b)=> b.score.design - a.score.design);
 let sortedFrontend = frontendResult.sort((a, b)=> b.score.frontend - a.score.frontend)
 let sortedBackend = backendResult.sort((a, b)=> b.score.backend - a.score.backend)


console.log(finalResult)
console.log(designResult)
console.log(sortedDesign)

try {
    let overallWinner = document.querySelector('#overallWinner')
    overallWinner.innerText = sortedTotal[0].name
    let overallWinnerScore = document.querySelector('#overallWinnerScore')
    overallWinnerScore.innerText = sortedTotal[0].total
    let overallWinnerTrack = document.querySelector('#overallWinnerDiv .tracks span');
    overallWinnerTrack.innerText = sortedTotal[0].track.join(', ')

    let overallSecond = document.querySelector('#overallSecond')
    overallSecond.innerText = sortedTotal[1].name
    let overallSecondScore = document.querySelector('#overallSecondScore')
    overallSecondScore.innerText = sortedTotal[1].total
    let overallSecondTrack = document.querySelector('#overallSecondDiv .tracks span');
    overallSecondTrack.innerText = sortedTotal[1].track.join(', ')

    let overallThird = document.querySelector('#overallThird')
    overallThird.innerText = sortedTotal[2].name
    let overallThirdScore = document.querySelector('#overallThirdScore')
    overallThirdScore.innerText = sortedTotal[2].total
    let overallThirdTrack = document.querySelector('#overallThirdDiv .tracks span');
    overallThirdTrack.innerText = sortedTotal[2].track.join(', ')
} catch (error) {
    console.log('entry error in the overall winners section', error)    
}

try {
    let firstInDesign = document.querySelector('#firstInDesign')
    firstInDesign.innerText = sortedDesign[0].name
    let firstInDesignScore = document.querySelector('#firstInDesignScore')
    firstInDesignScore.innerText = sortedDesign[0].score.design
    let firstInDesignDiv = document.querySelector('#firstInDesignDiv .tracks span');
    firstInDesignDiv.innerText = sortedDesign[2].track.join(', ')

    let secondInDesign = document.querySelector('#secondInDesign')
    secondInDesign.innerText = sortedDesign[1].name
    let secondInDesignScore = document.querySelector('#secondInDesignScore')
    secondInDesignScore.innerText = sortedDesign[1].score.design
    let secondInDesignDiv = document.querySelector('#secondInDesignDiv .tracks span');
    secondInDesignDiv.innerText = sortedDesign[2].track.join(', ')

    let thirdInDesign = document.querySelector('#thirdInDesign')
    thirdInDesign.innerText = sortedDesign[2].name
    let thirdInDesignScore = document.querySelector('#thirdInDesignScore')
    thirdInDesignScore.innerText = sortedDesign[2].score.design
    let thirdInDesignDiv  = document.querySelector('#thirdInDesignDiv .tracks span');
    thirdInDesignDiv.innerText = sortedDesign[2].track.join(', ')
} catch (error) {
    console.log('entry error in the design winners section', error)    
}

try {
    let firstInFrontend = document.querySelector('#firstInFrontend')
    firstInFrontend.innerText = sortedFrontend[0].name
    let firstInFrontendScore = document.querySelector('#firstInFrontendScore')
    firstInFrontendScore.innerText = sortedFrontend[0].score.frontend
    let firstInFrontendDiv  = document.querySelector('#firstInFrontendDiv .tracks span');
    firstInFrontendDiv.innerText = sortedFrontend[2].track.join(', ')

    let secondInFrontend = document.querySelector('#secondInFrontend')
    secondInFrontend.innerText = sortedFrontend[1].name
    let secondInFrontendScore = document.querySelector('#secondInFrontendScore')
    secondInFrontendScore.innerText = sortedFrontend[1].score.frontend
    let secondInFrontendDiv = document.querySelector('#secondInFrontendDiv .tracks span');
    secondInFrontendDiv.innerText = sortedFrontend[2].track.join(', ')

    let thirdInFrontend = document.querySelector('#thirdInFrontend')
    thirdInFrontend.innerText = sortedFrontend[2].name
    let thirdInFrontendScore = document.querySelector('#thirdInFrontendScore')
    thirdInFrontendScore.innerText = sortedFrontend[2].score.frontend
    let thirdInFrontendDiv = document.querySelector('#thirdInFrontendDiv .tracks span');
    thirdInFrontendDiv.innerText = sortedFrontend[2].track.join(', ')
} catch (error) {
    console.log('entry error in the frontend winners section', error)    
}

try {
    let firstInBackend = document.querySelector('#firstInBackend')
    firstInBackend.innerText = sortedBackend[0].name
    let firstInBackendScore = document.querySelector('#firstInBackendScore')
    firstInBackendScore.innerText = sortedBackend[0].score.backend
    let firstInBackendDiv = document.querySelector('#firstInBackendDiv .tracks span');
    firstInBackendDiv.innerText = sortedBackend[2].track.join(', ')

    let secondInBackend = document.querySelector('#secondInBackend')
    secondInBackend.innerText = sortedBackend[1].name
    let secondInBackendScore = document.querySelector('#secondInBackendScore')
    secondInBackendScore.innerText = sortedBackend[1].score.backend
    let secondInBackendDiv = document.querySelector('#secondInBackendDiv .tracks span');
    secondInBackendDiv.innerText = sortedBackend[2].track.join(', ')

    let thirdInBackend = document.querySelector('#thirdInBackend')
    thirdInBackend.innerText = sortedBackend[2].name
    let thirdInBackendScore = document.querySelector('#thirdInBackendScore')
    thirdInBackendScore.innerText = sortedBackend[2].score.backend
    let thirdInBackendDiv = document.querySelector('#thirdInBackendDiv .tracks span');
    thirdInBackendDiv.innerText = sortedBackend[2].track.join(', ')

} catch (error) {
    console.log('entry error in the backend winners section', error)
}


$(document).ready(function() {
    $('#myTable').DataTable( {
        "scrollX": true,
        data: sortedTotal,
        columns: [
            {data: "sn", title: 'S/N'},
            { data: "name", title: 'Name' },
            { data: "username", title: 'Username' },
            { data: "email", title: 'Email' },
            { data: "total", title: 'Score' },
        ]
    } );
} );

$(document).ready(function() {
    $('#designTable').DataTable( {
        "scrollX": true,
        data: sortedDesign,
        columns: [
            {data: "sn", title: 'S/N'},
            { data: "name", title: 'Name' },
            { data: "username", title: 'Username' },
            { data: "email", title: 'Email' },
            { data: "score.design", title: 'Score' },
        ]
    } );
} );

$(document).ready(function() {
    $('#frontendTable').DataTable( {
        "scrollX": true,
        data: sortedFrontend,
        columns: [
            {data: "sn", title: 'S/N'},
            { data: "name", title: 'Name' },
            { data: "username", title: 'Username' },
            { data: "email", title: 'Email' },
            { data: "score.frontend", title: 'Score' },
        ]
    } );
} );

$(document).ready(function() {
    $('#backendTable').DataTable( {
        "scrollX": true,
        data: sortedBackend,
        columns: [
            {data: "sn", title: 'S/N'},
            { data: "name", title: 'Name' },
            { data: "username", title: 'Username' },
            { data: "email", title: 'Email' },
            { data: "score.backend", title: 'Score' },
        ]
    } );
} );


  