(function() {

    var container = document.getElementById( 'container' ),
        trigger = container.querySelector( 'button.trigger' );
        var storyTrigger = document.getElementById( 'my-story');
        var contactTrigger = document.getElementById( 'contact-trigger');
        var glitch = document.getElementsByClassName( 'demo-2');
        var imgLoaded = document.getElementsByClassName( 'imgloaded ');
        var body = document.getElementsByTagName("BODY")[0];
        var portfolio = document.getElementById('portfolio');
        var glitchStyle = window.getComputedStyle(glitch[0]);
        var glitchAnimation = glitchStyle.getPropertyValue('--time-anim');
        portfolio.addEventListener( 'click', toggleContent );


    function toggleContent() {
        //Close portfolio
        if( classie.has( container, 'container--open' ) ) {
            classie.remove( container, 'container--open' );
            classie.remove( trigger, 'trigger--active' );
            window.addEventListener( 'scroll', noscroll );
            portfolio.innerHTML = "Portfolio";

            glitch[0].style.setProperty('--time-anim', '4s');
            body.classList.add("stop-scrolling");
            //For Moble devices
            body.bind('touchmove', function(e){
                e.preventDefault();
            });




        }
        else {
            //Open Portfolio
            classie.add( container, 'container--open' );
            classie.add( trigger, 'trigger--active' );
            classie.remove( container, 'glitch');
            portfolio.innerHTML = "Close";

            window.removeEventListener( 'scroll', noscroll );

            glitch[0].style.setProperty('--time-anim', '0s');
            body.classList.remove("stop-scrolling");
            //for mobile devices
            body.unbind('touchmove')
        }
    }
    function noscroll() {
        window.scrollTo( 0, 0 );
    }
    // reset scrolling position
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // disable scrolling
    window.addEventListener( 'scroll', noscroll );

    portfolio.addEventListener( 'click', toggleContent );

})();
