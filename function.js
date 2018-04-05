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
var counter =0;


function start() {
    console.log('this is the start function')
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
        newgame.multiply_element(newround);




    };
    // add event listener for all input boxes after they've been created
    var inputboxes = document.getElementsByClassName('inputboxes');
    console.log("line 71:", inputboxes);

    //stackoverflow
    for (var i = 0; i < inputboxes.length; i++) {
        let a = newround;
        inputboxes[i].addEventListener("input", validate(i, a));
    }

    // function bindClick(i) {
    //     return function() {
    //         console.log("you clicked region number " + i);
    //     };
    // }


    // for (x = 0; x < inputboxes.length; x++) {
    //     console.log("inputboxes[x] line 75", inputboxes[x]);
    //     inputboxes[x].addEventListener('keydown', function() {
    //         console.log("inputboxes[x] line 77", inputboxes[x]);
    //         validate([inputboxes[x]]);
    //     })

    // };

}

// create object for new game.
var newgame = {

    multiply_element: function(a) {
        var leftbox = document.getElementById("leftbox");
        console.log(leftbox);
        for (i = 0; i < a.length; i++) {

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
};
//////// Input Validation ///




inputboxes = document.getElementsByClassName('inputboxes');
console.log('inputboxes line 237:', inputboxes);


inputboxes = document.getElementsByClassName('inputboxes');

function validate(i, a) {
    return function() {

        console.log("newround", a);
        // for (var z=0; z < a.length; z++){
        // console.log('z:',z)
        // console.log('a.length',a.length)
        // console.log('This is Oggi ' + inputboxes[i].value )
         
        if (inputboxes[i].value == a[i]) {
            console.log(inputboxes[i], '=', a[i]);
            //console.log(inputboxes[i])
            inputboxes[i].style.border = "2px solid gold "
            inputboxes[i].readOnly = true;
            console.log(inputboxes[i].value, '=', a[i])
            //console.log(a[z])
            console.log("match!")
            counter++;
            console.log(counter);
            if (counter == a.length){
                alert(`Good Job! Check out ${a.toString().replace(/,+/g, '')} sometime!`)
            }
            
        } 
        else if (inputboxes[i].value != a[i]) {
            inputboxes[i].style.border = "2px solid red";
            inputboxes[i].style.animation = "shake 0.10 s"
            //inputboxes[i].style[`animation - iteration - count`] = "infinite";
            
            console.log("--------BREAK------")
            console.log("lame");
        }
            


    };
}



//}
//     console.log("stckovflw index?:" + i);

// console.log("inputboxes[i]:",inputboxes[i]);
// //var boxarray=;
// //for (a=0; a < inputboxes[i].length; a++){
// boxarray.push(inputboxes[i]);
// console.log("boxaray:",boxarray);
// console.log("boxarray[0].value:",boxarray[0].value);
// //}//var boxarray_value = document.getElementById(`${boxarray}.`);
// //var getbox = document.getElementById(boxarray.id);
// //if (getbox.value == 
// //for (z=0; z < ){

// //if (input)
// //console.log("278 boxarray:",boxarray);
// //console.log("279 inputid[i]:",input_id);
// //console.log("280 getbox:",getbox)

// var index_of_input_id = document.getElementById
//document.getElementById('inputboxes[i]')
// function validate(a) {

//     var validate_array = [];
//     //input
//     //console.log(inputg.value);
//     // validate_array.push(inputboxes[p]);
//     // console.log(validate_array);
//     // if (validate_array == newround.toString().replace(/,+/g, '')) {
//     //         inputboxes[p].readOnly = true;
//     //         alert("Winner");
//     // }
//     console.log('i work!', a);
// };