/**
 * Group all of the members.
 *
 */

function group(){

    document.getElementById('result').innerHTML= "分組名單：<br><br> <ul> </ul>";

    var members = document.getElementById('members').value.trim();
    var memberNum = document.getElementById('groupNum').value.trim();

    if(isNaN(memberNum) || memberNum == 0){
        alert('每組人數不能為0或非數字！');
        return;
    }

    if(memberNum > members.length){
        alert('每組人數不能大於成員人數！');
        return;
    }


    var memberArray = members.split(",");
    var newMembers = shuffle(memberArray);
    var groupNumber = 1;

    //If memberNum equal 1, show each member as group

    if(memberNum == 1){
        for(var i = 0; i < memberArray.length; i++){
            $("#result ul").append('<li> 第'  + groupNumber + '組：' + newMembers[i] + '</li>');
            groupNumber++;
        }
        return;
    }

    //If memberNum more than 1, show each group by this number

    for(var i = 0; i < memberArray.length; i++){

        var group = [];

        for(var i = 0; i < memberNum; i++){

            var member = newMembers.shift();

            group.push(member);

        }

        $("#result ul").append('<li> 第'  + groupNumber + '組：' + group + '</li>');

        groupNumber++;
    }

    $("#result ul").append('<li> 第' + groupNumber + '組：' + newMembers + '</li>');
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
