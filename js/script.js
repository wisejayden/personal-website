(function() {
    var container = document.getElementById( 'container' ),
        trigger = container.querySelector( 'button.trigger' );
        var storyTrigger = document.getElementById( 'my-story');
        var contactTrigger = document.getElementById( 'contact-trigger');



    function toggleContent() {
        if( classie.has( container, 'container--open' ) ) {
            classie.remove( container, 'container--open' );
            classie.remove( trigger, 'trigger--active' );
            window.addEventListener( 'scroll', noscroll );
        }
        else {
            classie.add( container, 'container--open' );
            classie.add( trigger, 'trigger--active' );
            window.removeEventListener( 'scroll', noscroll );
        }
    }

    function toggleContact() {
        if( classie.has( container, 'contac--open' ) ) {
            classie.remove( container, 'contact--open' );
            classie.remove( contactTrigger, 'contact-trigger--active' );
            window.addEventListener( 'scroll', noscroll );
        }
        else {
            classie.add( container, 'contact--open' );
            classie.add( contactTrigger, 'contact-trigger--active' );
            window.removeEventListener( 'scroll', noscroll );
        }
    }

    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    // reset scrolling position
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // disable scrolling
    window.addEventListener( 'scroll', noscroll );

    trigger.addEventListener( 'click', toggleContent );
    contactTrigger.addEventListener( 'click', toggleContact );


    // For Demo purposes only (prevent jump on click)
    [].slice.call( document.querySelectorAll('.items-wrap a') ).forEach( function(el) { el.onclick = function() { return false; } } );
})();
