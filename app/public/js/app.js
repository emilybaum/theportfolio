
// // ENTRY FOR ANIMATION ON LETTERS
$(".text-animation").hover(function () {
    console.log("hover")
    var thisElement = $(this).attr("id");
    animateCSS(thisElement, 'rubberBand', callback)
})



function animateCSS(element, animationName, callback) {
    console.log("animate")
    const node = document.getElementById(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}


function callback() {
    console.log("callback successful")
}




// ===============================
// bootstrap modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

// PORTFOLIO
$(".projects-display").on("hover", function () {
    $(this).removeClass("hidden")
    $(this).addClass("animated bounceIn")
})

