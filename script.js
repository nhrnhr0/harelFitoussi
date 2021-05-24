

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)  &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
    /*
    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
    */
}


function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}


el = document.querySelector('.section-4 .part-2')
var handler = onVisibilityChange(el, function() {
    /* Your code go here */
    console.log(el);
    if(isElementInViewport(el)) {
        document.querySelector('.section-4 .part-2 .checkmark').classList.add('active');
    }else {
        document.querySelector('.section-4 .part-2 .checkmark').classList.remove('active');
        }
    console.log(this);
    
});

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false);
    addEventListener('load', handler, false);
    addEventListener('scroll', handler, false);
    addEventListener('resize', handler, false);
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler); // Internet Explorer 9+ :(
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
}