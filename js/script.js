(function() {
    var container = document.getElementById( 'container' ),
        trigger = container.querySelector( 'button.trigger' );
        var storyTrigger = document.getElementById( 'my-story');
        var contactTrigger = document.getElementById( 'contact-trigger');
        var glitch = document.getElementsByClassName( 'demo-2');
        var imgLoaded = document.getElementsByClassName( 'imgloaded ');

        var glitchStyle = window.getComputedStyle(glitch[0]);
        var glitchAnimation = glitchStyle.getPropertyValue('--time-anim');
        console.log("GLITCH ANIMATION", glitchAnimation);


        // function changeAnimation() {
        //     glitch[0].style.animationDuration= "0s";
        //     console.log("CHanged Duration!", glitch[0].style);
        //     imgLoaded[0].style.animationDuration = "0s";
        //
        // }

    function toggleContent() {
        if( classie.has( container, 'container--open' ) ) {
            classie.remove( container, 'container--open' );
            classie.remove( trigger, 'trigger--active' );
            window.addEventListener( 'scroll', noscroll );
            glitch[0].style.setProperty('--time-anim', '4s');


        }
        else {
            classie.add( container, 'container--open' );
            classie.add( trigger, 'trigger--active' );
            classie.remove( container, 'glitch');
            window.removeEventListener( 'scroll', noscroll );
            // changeAnimation();
            glitch[0].style.setProperty('--time-anim', '0s');

        }
    }



    // document.getElementById("p2").style.color = "blue";


    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    // reset scrolling position
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // disable scrolling
    window.addEventListener( 'scroll', noscroll );

    trigger.addEventListener( 'click', toggleContent );
    // contactTrigger.addEventListener( 'click', toggleContact );
    // glitch[0].addEventListener( 'click', function() {
    //     console.log("HELLO!");
    // } );



    // For Demo purposes only (prevent jump on click)
    [].slice.call( document.querySelectorAll('.items-wrap a') ).forEach( function(el) { el.onclick = function() { return false; } } );
})();
