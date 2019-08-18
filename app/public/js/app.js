$(document).ready(function () {


// UPDATED
    function makeVisibleName() {
        for (var j = 1; j <= 12; j++) {
            thisElement = $("#this" + [j])
            timeDelayAnimation(j)
        }
    }
    makeVisibleName()

    function timeDelayAnimation(value) {
        setTimeout(function () {
            $("#this" + [value]).removeClass("eb-hidden")
        }, 200*value);
    }

    function makeVisableProject() {
        console.log("make visable project")
        setTimeout(function () {
            $("#projectVisable").removeClass("eb-hidden")
            $("#techVisable").removeClass("eb-hidden")

            $("#projectVisable").addClass("animated slideInRight")
            $("#techVisable").addClass("animated slideInLeft")
        }, 3500);
    }
    makeVisableProject()


    // // ENTRY FOR ANIMATION ON LETTERS
    $(".text-animation").hover(function () {
        console.log("hover")
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