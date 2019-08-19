$(document).ready(function () {


    // NAME TEXT -------------------------------
    function makeVisibleName() {
        for (var j = 1; j <= 12; j++) {
            thisElement = $("#this" + [j])
            timeDelayAnimationName(j)
        }
    }
    makeVisibleName()

    function timeDelayAnimationName(value) {
        setTimeout(function () {
            $("#this" + [value]).removeClass("eb-hidden")
        }, 200*value);
    }
    // -----------------------------------------


    // FULL STACK TEXT -------------------------
    function makeVisibleFullStack() {
        for (var j = 1; j <= 4; j++) {
            thisElement = $("#dev" + [j])
            timeDelayAnimationTech(j)
        }
    }
    makeVisibleFullStack()

    function timeDelayAnimationTech(value) {
        setTimeout(function () {
            $("#dev" + [value]).removeClass("eb-hidden")
        }, 400 * value);
    }
    // -----------------------------------------

    // PROJECT BUTTON --------------------------
    function makeVisableProject() {
        console.log("make visable project")
        setTimeout(function () {
            $("#projectVisable").removeClass("eb-hidden")
            // $("#techVisable").removeClass("eb-hidden")

            $("#projectVisable").addClass("animated slideInRight")
            // $("#techVisable").addClass("animated fadeInDownBig")
        }, 3500);
    }
    makeVisableProject()
    // ----------------------------------------


    // // ENTRY FOR ANIMATION ON LETTERS
    $(".text-animation").hover(function () {
        console.log("hover")
        var thisElement = $(this).attr("id");
        animateCSS(thisElement, 'rubberBand', callback)
    })


    // HOVER ANIMATION EFFECT
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
        console.log("SO FUN!")
    }


    // BOOTSTRAP MODAL
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    // PORTFOLIO ENTRY POINT - HOVER
    $(".projects-display").on("hover", function () {
        $(this).removeClass("hidden")
        $(this).addClass("animated bounceIn")
    })
    
});