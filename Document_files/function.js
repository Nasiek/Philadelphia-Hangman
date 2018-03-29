//var neighborhoods = ["Bustleton, Bridesburg, Cedarbrook, Chestnut Hill, East Falls, East Mount Airy, Grays Ferry, Olney, Pennypack, Park Somerton,  West Mount Airy,  West Oak Lane, Wissahickon Park, Riverfront, Byberry, West Torresdale, Mechanicsville, Parkwood, Manor,Franklin Mills, Northeast Philadelphia, Airport,Modena,Morrell Park,Millbrook,Crestmont Farms,Academy Gardens,,Pennypack,Aston Woodbridge,Pennypack Woods,Winchester Park,Torresdale,Lexington Park,Rhawnhurst,Fox Chase,Burholme,Oxford Circle,Summerdale,Crescentville,Lawndale,Northwood,Holmesburg,Frankford,Mayfair,Tacony,Wissinoming,Andorra,Upper Roxborough,Dearnley Park,Roxborough Park,Germany Hill,Wissahickon Hills,Roxborough,Manayunk,Wissahickon,East Germantown,Germantown - Morton,West Central Germantown,Germantown - Penn Knox,Germantown - Westside,Southwest Germantown,Ogontz,Wister,Nicetown,Tioga,Allegheny West,Glenwood,Fern Rock,East Oak Lane,Melrose Park Gardens,Franklinville,Feltonville,Richmond,Port Richmond,Hunting Park,Juniata Park,Harrowgate,Fairhill,Upper Kensington,McGuire,Stanton,Brewerytown,Sharswood,North Central,Yorktown,Ludlow,Hartranft,West Kensington,Fishtown - Lower Kensington,Old Kensington,Northern Liberties,Logan,Society Hill,Old City,Chinatown,Center City East,Washington Square West,Fairmount,Francisville,Spring Garden,Logan Square,Rittenhouse,Fitler Square,Graduate Hospital,Point Breeze,Hawthorne,Bella Vista,Queen Village,Dickinson Narrows,Passyunk Square,Greenwich,Lower Moyamensing,Whitman,Industrial,Airport,Clearview,Penrose,Paschall,Bartram Village,Kingsessing,Cobbs Creek,Walnut Hill,Cedar Park,Garden Court,Woodland Terrace,Spruce Hill,Southwest Schuylkill,University City,Powelton,West Powelton,East Parkside,Belmont,Haverford North,West Parkside,Mill Creek,Dunlap,Mantua,Haddington,Carroll Park,Overbrook,Wynnefield Heights,Callowhill,West Poplar,East Poplar,Strawberry Mansion,East Park,Wynnefield,West Park,Normandy Village,Stadium District,Navy Yard,East Kensington,Elmwood,Girard Estates,Eastwick,Packer Park,Pennsport,Newbold,West Passyunk,East Passyunk"];

document.getElementById("leftbox")

//function somefunction(){alert("hello")};

/*
Modal
*/

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

/*
Letter Input Field
*/
// create object for new game.
var newgame = {

    start: function() {
        newround = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
        return newround;
    },



    neighborhoods: ["Bustleton", "Bridesburg", "Cedarbrook", "Chestnut Hill", "East Falls", "East Mount Airy", "Grays Ferry", "Olney", "Pennypack Park", "Somerton", "West Mount Airy", "West Oak Lane", "Wissahickon Park", "Riverfront", "Byberry", "West Torresdale", "Mechanicsville", "Parkwood Manor", "Franklin Mills", "Northeast Philadelphia", "Airport", "Modena", "Morrell Park", "Millbrook", "Crestmont Farms", "Academy Gardens", "Pennypack", "Aston", "Woodbridge", "Pennypack Woods", "Winchester Park", "Torresdale", "Lexington Park", "Rhawnhurst", "Fox Chase", "Burholme", "Oxford Circle", "Summerdale", "Crescentville", "Lawndale", "Northwood", "Holmesburg", "Frankford", "Mayfair", "Tacony", "Wissinoming", "Andorra", "Upper Roxborough", "Dearnley Park", "Roxborough Park", "Germany Hill", "Wissahickon Hills", "Roxborough", "Manayunk", "Wissahickon", "East", "Germantown", "Germantown - Morton", "West Central Germantown", "Germantown - Penn Knox", "Germantown - Westside", "Southwest Germantown", "Ogontz", "Wister,Nicetown", "Tioga", "Allegheny West", "Glenwood", "Fern Rock", "East Oak Lane", "Melrose Park Gardens", "Franklinville", "Feltonville", "Richmond", "Port Richmond", "Hunting Park", "Juniata Park", "Harrowgate", "Fairhill", "Upper Kensington", "McGuire", "Stanton", "Brewerytown", "Sharswood", "North Central", "Yorktown", "Ludlow", "Hartranft", "West Kensington", "Fishtown - Lower Kensington", "Old Kensington", "Northern Liberties", "Logan", "Society Hill", "Old City", "Chinatown", "Center City East", "Washington Square West", "Fairmount", "Francisville", "Spring Garden", "Logan Square", "Rittenhouse", "Fitler Square", "Graduate Hospital", "Point Breeze", "Hawthorne", "Bella Vista", "Queen Village", "Dickinson Narrows", "Passyunk Square", "Greenwich", "Lower Moyamensing", "Whitman", "Industrial", "Airport", "Clearview", "Penrose", "Paschall", "Bartram Village", "Kingsessing,Cobbs Creek", "Walnut Hill", "Cedar Park", "Garden Court", "Woodland Terrace", "Spruce Hill", "Southwest Schuylkill", "University City", "Powelton", "West Powelton", "East Parkside", "Belmont", "Haverford North", "West Parkside", "Mill Creek", "Dunlap", "Mantua", "Haddington", "Carroll Park", "Overbrook", "Wynnefield Heights", "Callowhill", "West Poplar", "East Poplar", "Strawberry Mansion", "East Park", "Wynnefield", "West Park", "Normandy Village", "Stadium District", "Navy Yard", "East Kensington", "Elmwood", "Girard Estates", "Eastwick", "Packer Park", "Pennsport", "Newbold", "West Passyunk", "East Passyunk"],
    neighborhood: [],
    word: [],
    split: function() {
        for (i = 0; i < neighborhoods.length; i++) {
            neighborhoods.forEach(function(){
            	//console.log("hello");
            	console.log(neighborhoods.length)
            	return neighborhoods[i];
            	var neighborhood=neighborhoods[i];
            	return neighborhood;
            	var word = neighborhood.split("");

            });
            // var neighborhood = neighborhoods[i];
            // console.log(neighborhood);
            // return neighborhood;
            // var word = neighborhood.split("");
            // return word;
            // return "helo";
            // //console.log(word);
        }
    },
    // calculate number of elements in each place name
    //function calculatestring(a) {
    // return "hi";
    //},

    // create a function where input box is created for each letter in each word
    //var obj = {
    multiplyelement: function(a) {
        for (i = 0; i < a.length; i++) {
            //var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            //if (i !== "-" && i !== " ") {

            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.className = "inputboxes";
            input.id = 'input' + a[i] + a[i].indexOf;
            input.value.length = "1";
            input.maxLength = "1";

            var parent = document.getElementsByClassName("leftbox")[0];
            parent.appendChild(input);
        }
    },
    //}

    //check if input is true
    // .includes on word.includes(array[i])
    check: function(a) {
        inputbox_array = [document.getElementsByClassName("inputboxes")];
        for (i = 0; i <= inputbox_array.length; i++) {
            if (input[i].value == word[i]) {
                document.getElementById['input' + a[i] + a[i].indexOf];
                input.type = "text"
                input.readonly = "readonly";
            }
        }
    }

} //game object bracket -_-

// New Game Button - needs to go through the neighborhoods 
// array and select a new random neighborhood
// then it will generate a new set of input boxes in leftdiv
var neighborhoods = ["Bustleton", "Bridesburg", "Cedarbrook", "Chestnut Hill", "East Falls", "East Mount Airy", "Grays Ferry", "Olney", "Pennypack Park", "Somerton", "West Mount Airy", "West Oak Lane", "Wissahickon Park", "Riverfront", "Byberry", "West Torresdale", "Mechanicsville", "Parkwood Manor", "Franklin Mills", "Northeast Philadelphia", "Airport", "Modena", "Morrell Park", "Millbrook", "Crestmont Farms", "Academy Gardens", "Pennypack", "Aston", "Woodbridge", "Pennypack Woods", "Winchester Park", "Torresdale", "Lexington Park", "Rhawnhurst", "Fox Chase", "Burholme", "Oxford Circle", "Summerdale", "Crescentville", "Lawndale", "Northwood", "Holmesburg", "Frankford", "Mayfair", "Tacony", "Wissinoming", "Andorra", "Upper Roxborough", "Dearnley Park", "Roxborough Park", "Germany Hill", "Wissahickon Hills", "Roxborough", "Manayunk", "Wissahickon", "East", "Germantown", "Germantown - Morton", "West Central Germantown", "Germantown - Penn Knox", "Germantown - Westside", "Southwest Germantown", "Ogontz", "Wister,Nicetown", "Tioga", "Allegheny West", "Glenwood", "Fern Rock", "East Oak Lane", "Melrose Park Gardens", "Franklinville", "Feltonville", "Richmond", "Port Richmond", "Hunting Park", "Juniata Park", "Harrowgate", "Fairhill", "Upper Kensington", "McGuire", "Stanton", "Brewerytown", "Sharswood", "North Central", "Yorktown", "Ludlow", "Hartranft", "West Kensington", "Fishtown - Lower Kensington", "Old Kensington", "Northern Liberties", "Logan", "Society Hill", "Old City", "Chinatown", "Center City East", "Washington Square West", "Fairmount", "Francisville", "Spring Garden", "Logan Square", "Rittenhouse", "Fitler Square", "Graduate Hospital", "Point Breeze", "Hawthorne", "Bella Vista", "Queen Village", "Dickinson Narrows", "Passyunk Square", "Greenwich", "Lower Moyamensing", "Whitman", "Industrial", "Airport", "Clearview", "Penrose", "Paschall", "Bartram Village", "Kingsessing,Cobbs Creek", "Walnut Hill", "Cedar Park", "Garden Court", "Woodland Terrace", "Spruce Hill", "Southwest Schuylkill", "University City", "Powelton", "West Powelton", "East Parkside", "Belmont", "Haverford North", "West Parkside", "Mill Creek", "Dunlap", "Mantua", "Haddington", "Carroll Park", "Overbrook", "Wynnefield Heights", "Callowhill", "West Poplar", "East Poplar", "Strawberry Mansion", "East Park", "Wynnefield", "West Park", "Normandy Village", "Stadium District", "Navy Yard", "East Kensington", "Elmwood", "Girard Estates", "Eastwick", "Packer Park", "Pennsport", "Newbold", "West Passyunk", "East Passyunk"];










// var getleftdiv = document.getElementsByClassName("leftbox");
// //var getdiv = document.getElementsByClassName("letters");
// //var getinput =document.getElementsByClassName("inputboxes");
// var creatediv = document.createElement('div');
// creatediv.className = "letters" // give div same class name for order
// var createinput = document.createElement('input');
// createinput.className = "inputboxes" // give inputs same class name
// createinput.type = "text";
// //var divinput = creatediv.appendChild(createinput);
// getleftdiv.appendChild(createinput);
// //createelement;
// createelement.style.display = "inline-block"




















// var addinput = 0;
// function letterinput(a){
// 	var addbox = document.getElementById("originput");
// 	var docstyle = addbox.style.display;
// 	if (docstyle=='none') addbox.style.display = '';
// 	addbox++;

// 	var text = document.createElement('div');
// 	text.id = 'addbox_' + addbox_;
// 	text.innerHTML = "<input type='text' value='' class='buckinput' name='items[]' style='padding:5px;'/> a href='javascript:void(0);' onclick='addInput("+ addbox + "'>add more</a";

// 	addList.appendChild(text);
// 	}
// 	letterinput(1);

// 	var inpts = document.getElementsByClassName("inputboxes");
// 	var leftbox = document.getElementsByClassName("leftbox");
// 	for (i=0; i <= word.length; i++){
// 		console.log(word);
// 		var newinput = document.createElement("input");
// 		var boxes = newinput.appendChild(inpts);
// 		boxes.appendChild(leftbox);
// }
// }