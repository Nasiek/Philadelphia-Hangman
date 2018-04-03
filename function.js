var neighborhoods = ["Bustleton", "Bridesburg", "Cedarbrook", "Chestnut Hill", "East Falls", "East Mount Airy", "Grays Ferry", "Olney", "Pennypack Park", "Somerton", "West Mount Airy", "West Oak Lane", "Wissahickon Park", "Riverfront", "Byberry", "West Torresdale", "Mechanicsville", "Parkwood Manor", "Franklin Mills", "Northeast Philadelphia", "Airport", "Modena", "Morrell Park", "Millbrook", "Crestmont Farms", "Academy Gardens", "Pennypack", "Aston", "Woodbridge", "Pennypack Woods", "Winchester Park", "Torresdale", "Lexington Park", "Rhawnhurst", "Fox Chase", "Burholme", "Oxford Circle", "Summerdale", "Crescentville", "Lawndale", "Northwood", "Holmesburg", "Frankford", "Mayfair", "Tacony", "Wissinoming", "Andorra", "Upper Roxborough", "Dearnley Park", "Roxborough Park", "Germany Hill", "Wissahickon Hills", "Roxborough", "Manayunk", "Wissahickon", "East", "Germantown", "Germantown - Morton", "West Central Germantown", "Germantown - Penn Knox", "Germantown - Westside", "Southwest Germantown", "Ogontz", "Wister,Nicetown", "Tioga", "Allegheny West", "Glenwood", "Fern Rock", "East Oak Lane", "Melrose Park Gardens", "Franklinville", "Feltonville", "Richmond", "Port Richmond", "Hunting Park", "Juniata Park", "Harrowgate", "Fairhill", "Upper Kensington", "McGuire", "Stanton", "Brewerytown", "Sharswood", "North Central", "Yorktown", "Ludlow", "Hartranft", "West Kensington", "Fishtown - Lower Kensington", "Old Kensington", "Northern Liberties", "Logan", "Society Hill", "Old City", "Chinatown", "Center City East", "Washington Square West", "Fairmount", "Francisville", "Spring Garden", "Logan Square", "Rittenhouse", "Fitler Square", "Graduate Hospital", "Point Breeze", "Hawthorne", "Bella Vista", "Queen Village", "Dickinson Narrows", "Passyunk Square", "Greenwich", "Lower Moyamensing", "Whitman", "Industrial", "Airport", "Clearview", "Penrose", "Paschall", "Bartram Village", "Kingsessing,Cobbs Creek", "Walnut Hill", "Cedar Park", "Garden Court", "Woodland Terrace", "Spruce Hill", "Southwest Schuylkill", "University City", "Powelton", "West Powelton", "East Parkside", "Belmont", "Haverford North", "West Parkside", "Mill Creek", "Dunlap", "Mantua", "Haddington", "Carroll Park", "Overbrook", "Wynnefield Heights", "Callowhill", "West Poplar", "East Poplar", "Strawberry Mansion", "East Park", "Wynnefield", "West Park", "Normandy Village", "Stadium District", "Navy Yard", "East Kensington", "Elmwood", "Girard Estates", "Eastwick", "Packer Park", "Pennsport", "Newbold", "West Passyunk", "East Passyunk"];
var neighborhoods_nospaces = neighborhoods.map(function(item) {
    return item.replace(/\s+/g, '');
    //return item.split('-').join('');
    //return item.replace(/-+/g, '');
})
var neighborhoods_nodashes = neighborhoods_nospaces.map(function(item) {
    //return item.replace(/\s+/g,'');
    return item.split('-').join('');
    //return item.replace(/-+/g, '');
})

neighborhoods = neighborhoods_nodashes;
var newround = [];
var input = "";
var isEmpty = "";
var leftbox = "";
var leftboxinnerhtml = "";
var leftboxregular = "";
var leftboxchildren = "";


function start() {
    countClicks = 0;
    var inputboxes = document.getElementsByClassName('inputboxes');
    leftboxregular = document.getElementById('leftbox');
    var leftboxchildren = document.getElementById('leftbox').childNodes;
    var leftboxinnerhtml = document.getElementById('leftbox').innerHTML;
    var isEmpty = leftboxinnerhtml.includes('class="inputboxes"');
    console.log(isEmpty, "isempty");
    ////// Input Box Focus /////
    $(document).ready(function() {
        $('input').on("input", function() {
            if ($(this).val().length == $(this).attr("maxlength")) {
                $(this).next().focus();
            }
        });
    });

    if (!isEmpty) {
        alert("a new game will go here!");

        newround = neighborhoods[Math.floor(Math.random() * neighborhoods.length)].split("");
        console.log(newround);


        console.log(newround);
        newgame.multiply_element(newround)

    } else if (isEmpty) {
        alert("It's not empty but here's the new game!")
        console.log(leftboxchildren);


        leftboxregular.innerHTML = ""
        console.log(leftboxchildren);


        newround = neighborhoods[Math.floor(Math.random() * neighborhoods.length)].split("");

        s = " ";
        dash = "-";

        console.log(newround);
        newgame.multiply_element(newround)

    };

}

// create object for new game.
var newgame = {

    multiply_element: function(a) {
        var leftbox = document.getElementById("leftbox");
        console.log(leftbox);
        for (i = 0; i < a.length; i++) {
            //var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

            var input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.className = "inputboxes";
            input.id = 'input' + a[i]; // + a[i].indexOf
            input.value.length = "1";
            input.maxLength = "1";
            console.log("!!!!", input.id)
            //var parent = document.getElementsByClassName("leftbox")[0];
            leftbox.appendChild(input);
        }
    }
    //check if input is true
    // .includes on word.includes(array[i])
    // check: function() {
    //     //input = document.getElementById(input.id);
    //     inputbox_array = [document.getElementsByClassName("inputboxes")];
    //     for (i = 0; i < inputbox_array.length; i++) {
    //         if (input[i].value == newround.forEach()) {
    //             document.getElementById['input' + a[i] + a[i].indexOf];
    //             input[i].type = "text"
    //             input[i].readonly = "readonly";
    //         }
    //     }
    // },

} //game object bracket -_-
var countClicks = 0;

function countclicks() {
    countClicks++;
}


function shuffle(a) {
    var currentIndex = a.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }

    return a;
}
/*
Letter Input Field
*/
function hint() {
    countclicks();
    console.log("CC", countClicks);
    newgamestarted = document.getElementById('startnewgame');
    // if (newgamestarted.onclick == true) {
    //     countClicks = 0;
    // }
    var first_guess = "";
    var second_guess = "";
    var third_guess = "";
    var fourth_guess = "";
    if (countClicks == 1) {
        // inputboxes = document.getElementsByClassName('inputboxes');
        var first_guess = newround[Math.floor(Math.random() * newround.length)];
        console.log("first_guess:", first_guess);
        console.log(newround);
        var matching_element = newround.find(function finder(element) {
            return element == first_guess;
        });
        matching_element;
        console.log("matching_element:", matching_element);

        var input_id = `input${matching_element}`;
        console.log("input_id:", input_id);
        var target_input = document.getElementById(input_id);
        console.log("target_input:", target_input);
        target_input.value = matching_element;
        console.log("target_input.value:", target_input.value);
    } else if (countClicks == 2) {
        // run this loop until numberOne is different than numberThree
        do {
            second_guess = newround[Math.floor(Math.random() * newround.length)];
        } while (second_guess === first_guess);

        // // run this loop until numberTwo is different than numberThree and numberOne
        // 
        // var random_element = newround[Math.floor(Math.random() * newround.length)];
        console.log("second_guess:", second_guess);
        console.log(newround);
        var matching_element = newround.find(function finder(element) {
            return element == second_guess;
        });
        matching_element;
        console.log("matching_element:", matching_element);

        var input_id = `input${matching_element}`;
        console.log("input_id:", input_id);
        var target_input = document.getElementById(input_id);
        console.log("target_input:", target_input);
        target_input.value = matching_element;
        console.log("target_input.value:", target_input.value);
    } else if (countClicks == 3) {
        do {
            third_guess = newround[Math.floor(Math.random() * newround.length)];
        } while (third_guess === second_guess || third_guess === first_guess);
        console.log("third_guess:", third_guess);
        console.log(newround);
        var matching_element = newround.find(function finder(element) {
            return element == third_guess;
        });
        matching_element;
        console.log("matching_element:", matching_element);

        var input_id = `input${matching_element}`;
        console.log("input_id:", input_id);
        var target_input = document.getElementById(input_id);
        console.log("target_input:", target_input);
        target_input.value = matching_element;
        console.log("target_input.value:", target_input.value);
    } else if (countClicks == 4) {
        do {
            fourth_guess = newround[Math.floor(Math.random() * newround.length)];
        } while (fourth_guess === third_guess || fourth_guess === second_guess || fourth_guess === first_guess);
        // var fourth_guess = newround[Math.floor(Math.random() * newround.length)];
        console.log("fourth_guess:", fourth_guess);
        console.log(newround);
        var matching_element = newround.find(function finder(element) {
            return element == fourth_guess;
        });
        matching_element;
        console.log("matching_element:", matching_element);

        var input_id = `input${matching_element}`;
        console.log("input_id:", input_id);
        var target_input = document.getElementById(input_id);
        console.log("target_input:", target_input);
        target_input.value = matching_element;
        console.log("target_input.value:", target_input.value);
    } else if (countClicks >= 5) {
        alert(`Pathetic! ${shuffle(newround).toString().replace(/,+/g, '')}`);
        countclicks();
        console.log(countClicks);
        console.log(shuffle(newround));
        console.log(newround);
    }
}
//////// Input Validation ///
inputboxes=document.getElementsByClassName('inputboxes');
for (p = 0; p < inputboxes.length; p++) {
    console.log("inputboxes[p]",inputboxes[p]);
    //inputboxes[p].addEventListener("input", validate(p););
}
function validate(p) {
    inputboxes[p].readOnly == true;
    var validate_array = [];
    validate_array.push(inputboxes[p]);
    console.log(validate_array);
    if (validate_array == newround.toString().replace(/,+/g, '')) {
        alert("Winner")
    }
}





