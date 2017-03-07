var first = document.getElementById("first")
var second = document.getElementById("second")
var third = document.getElementById("third")


first.addEventListener("click", function(){alert("you clicked on list stuff x")})

//true = clicking on list stuff 1.3.1 --> 1.x alert and stop (event capturing, outer to inner)
//false = clicking on list stuff 1.3.1 --> 1.3.x alert then 1.x alert and stop (event bubbling, inner to outer)
second.addEventListener("click", function(){event.stopPropagation();alert("you clicked on list stuff 1.x")},true)

third.addEventListener("click", function(){alert("you clicked on list stuff 1.3.x")})
