$(document).ready(function () {

    // function pageLoadAnimate() {

    // }
    
    // function makeVisible() {
    //     $(".eb-hidden").each(function (i, value) {
    //         // console.log(value)
    //         // thisElement = value.attr("id")
        
    //         setTimeout(function () { 
    //             // console.log(thisElement)
    //         $("#this" + [i]).removeClass("eb-hidden")

    //         }, 1000);
    //     })
    // }
    // makeVisible()

    function makeVisible() {
        console.log("make visible")
        for (var j = 1; j <= 12; j++) {
            thisElement = $("#this" + [j])
            console.log("the element: " + thisElement)
            otherFunction(j)
        }
    }
    makeVisible()

    function otherFunction(value) {
        setTimeout(function () {
            $("#this" + [value]).removeClass("eb-hidden")
            
        }, 100*value);
    }


    // // ENTRY FOR ANIMATION ON LETTERS
    $(".text-animation").hover(function () {
        var thisElement = $(this).attr("id");
        animateCSS(thisElement, 'rubberBand', callback)
    })



    function animateCSS(element, animationName, callback) {
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


});