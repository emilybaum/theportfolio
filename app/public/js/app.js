// function animateCSS(element, animationName) {
//     var node = document.querySelector(element)
//     console.log(node)
//     node.classList.add('animated', animationName)

//     function handleAnimationEnd() {
//         node.classList.remove('animated', animationName)
//         node.removeEventListener('animationend', handleAnimationEnd)

//         if (typeof callback === 'function') test()
//     }

//     node.addEventListener('animationend', handleAnimationEnd)
// }

// // ENTRY FOR ANIMATION ON LETTERS
$(".text-enhance").hover(function () {
    console.log("hover")
    var thisElement = $(this).attr("id");
    // console.log(thisElement)
    // // animateCSS(thisElement, 'shake')
    // // const element = document.querySelector('.my-element')
    // thisElement.addClass('animated', 'bounceOutLeft')
    animateCSS(thisElement, 'rubberBand')
})



function animateCSS(element, animationName, callback) {
    console.log("animate")
    // var thisElement = $("#"+ element)
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