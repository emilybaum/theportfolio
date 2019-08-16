function animateCSS(element, animationName) {
    var node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') test()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

// ENTRY FOR ANIMATION ON LETTERS
// $(".text-enhance").hover(function () {
//     thisElement = $(this).attr("id");
//     console.log(thisElement)
//     animateCSS(thisElement, 'shake')
// })

function test() {
    alert ("this is the call back")
}

// bootstrap modal
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
// })