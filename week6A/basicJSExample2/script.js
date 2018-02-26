window.addEventListener("load", onWindowLoaded);

function onWindowLoaded(event) {
	var addStarsBtn = document.getElementById("addStarsBtn");
    addStarsBtn.addEventListener("click", onAddStarsBtnClick);
}


function onAddStarsBtnClick() {
    // 1. get the element
    var numStarsInput = document.getElementById("numStarsInput");

    // 2. get its value property
    var numStars = numStarsInput.value

    // 3. for as many times as the value says...
    for (var i=0; i < numStars; i++) {

        // 4. make a div with a class named "star"
        var star = document.createElement("div");
        star.classList.add("star");

        // 5. manually set the top and left style properties to a random location
        // anywhere on the screen
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";

        // 6. get the planet element and add the star to the end
        var planet = document.getElementById("planet");
        planet.appendChild(star);
    }
}

