var dataSet = [
    ["", "Tiger Nixon", "@tiger", "tiger@yahoo.com", "51" ],
    [ "","Garrett Winters", "@winters", "winters@ymail.com", "22" ],
    [ "","Ashton Cox", "@cox", "cox@gmail.com", "1562"],
    [ "","Cedric Kelly", "@cedric", "cedric@yahoo.com", "6224"],
    [ "","Airi Satou", "@airi", "airi@gmail.com", "5407" ],
];



$(document).ready(function() {
    $('#myTable').DataTable( {
        "scrollX": true,
        data: dataSet,
        columns: [
            {title: "S/N"},
            { title: "Name" },
            { title: "Username" },
            { title: "Email" },
            { title: "Score" },
        ]
    } );
} );


  