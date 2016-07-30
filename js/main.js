/**
 * Group all of the members.
 *
 */

function group(){

    document.getElementById('result').innerHTML= "分組名單：<br><br> <ul> </ul>";

    var members = document.getElementById('members').value.trim();

    var memberArray = members.split(",");
    var newMembers = shuffle(memberArray);

    var i = newMembers.length;
    var groupNumber = 1;

    while (i--){

        var groupMembers1 = newMembers.shift();
        var groupMembers2 = newMembers.shift();

        //If group mebmer underdefined, break the loop

        if(!groupMembers1 || !groupMembers2){
            break;
        }

        var message = '第' + groupNumber + '組：' + groupMembers1 + '，' + groupMembers2;

        $("#result ul").append('<li>' + message + '</li>');

        groupNumber++;

    }
}

/**
 * Shuffle an array.
 *
 * @Param {Array} array
 * @Return {Array} array
 */

function shuffle(array) {

  var currentIndex = array.length, tmp, randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element
    tmp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tmp;
  }

  return array;
}
