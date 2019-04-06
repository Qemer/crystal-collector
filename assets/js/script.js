var randomScore = Math.floor(Math.random() * 101) + 19;
$(".randomScore").html(randomScore)

var rand;
var sum = 0
var win = 0
var losses = 0
var n=0;
var m=0;
$("img").on("click", function () {
    if(n<3){
        sum += $(this).data("value")
        $(".totalScore").html(sum)
        if (sum === randomScore) {
            $(".wins").html("wins: " + ++win)
            n+=1
            console.log("you are win")
            reset()
        }
        else if (sum > randomScore) {
            $(".losses").html("losses: " + ++losses)
            n+=1
            console.log("losses")
            reset()
        }
    }
    else {
        if(losses<win){
            $(".result").html("<h1>you won</h1>")
        }
        else{
            $(".result").html("<h1>you lost</h1>")

        }
    }
})

var arr = []
var crystalsArray = function () {
    arr = []
    while (arr.length < 4) {
        rand = Math.floor(Math.random() * 11) + 1;
        if (arr.indexOf(rand) == -1) {
            arr.push(rand)
        }
    }
}
crystalsArray()
console.log(arr)
var setDataValue = function () {
    var imgs = $("img")
    for (let i = 0; i < imgs.length; i++) {
        $(imgs[i]).data("value", arr[i])
    }
}
setDataValue()


var reset = function () {
    sum = 0
    randomScore = Math.floor(Math.random() * 101) + 19;
    $(".randomScore").html(randomScore)
    crystalsArray()
    setDataValue()
    console.log(arr)
}
$(".clear").on("click",function () {
   reset()
   win=0;
   losses=0;
   totalscore=0
   $(".losses").html(losses)
   $(".wins").html(win)
   $(".result").html("")
   $(".totalScore").html(totalscore)

})
