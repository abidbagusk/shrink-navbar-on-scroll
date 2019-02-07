window.onscroll = function () {
    shrink()
};

function shrink() {
    // get navbar
    var navbar = document.getElementsByClassName('navbar')[0];
    // get Scrolling Position
    var yPos = document.documentElement.scrollTop;

    if (yPos > 50) {
        navbar.style.padding = '0';
    } else {
        navbar.style.padding = '20px';
    }

}