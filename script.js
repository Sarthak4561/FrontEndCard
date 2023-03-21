function alertUser() {
    alert('U have Signed in!!!!');
}


const HTMLBODY = document.querySelector('body')


const randomColor = function(){

    const colors = ["#002942", "#CA7DB", "red", "green", "blue", "yellow","purple","#bfc8d6"];
    const randomIndex = Math.floor (Math.random() * colors.length);

    const randomColor = colors[randomIndex];
    HTMLBODY.style.backgroundColor=randomColor;

    console.log("We succesfully changed the color to "+ randomColor);
}

HTMLBODY.onclick=randomColor;