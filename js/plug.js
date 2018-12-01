var myContent = document.getElementsByClassName("hide");
var sub = document.getElementById("sub");
var innerSub = document.getElementById("inner-sub")
function hide0() {
    myContent[0].classList.toggle("toggle");
}

function hide1() {
    myContent[1].classList.toggle("toggle");
}

function hide2() {
    myContent[2].classList.toggle("toggle");
}

function hide3() {
    if (sub.style.display === 'block') {
        sub.style.display = 'none';
    } else {
        sub.style.display = 'block';
    }
}
sub.addEventListener('click', function (e) {
    sub.style.display = 'none';
});
innerSub.addEventListener('click', function (e) {
	e.stopPropagation();
});