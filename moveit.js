
// Developed by Casper Alex Panduro 

(function ( $ ) {
    $.fn.moveit = function( options ) {
        var settings = $.extend({
            // These are the defaults.
            sensitivity: 10,
            shadow: false
        }, options );

        var wWidth = $(window).width();
        var wHeight = $(window).height();

        $(window).resize(function(){
            wWidth = $(window).width();
            wHeight = $(window).height();
        });
        
        var moveit = this;

        moveit.css({
            "position":"relative"
        });

        if(settings.shadow == true) {
            var content = this.html();
            this.append('<span style="position: absolute; top: 0px; left: 0px;">'+content+'</span>')
        }

        $(window).mousemove(function( event ) {
          var yHeight = (event.pageY - $(window).scrollTop() ) / (wHeight/2) -1;
          var yWidth = event.pageX / (wWidth/2) -1;
          moveit.css({
            "top": yHeight*settings.sensitivity,
            "left":yWidth*settings.sensitivity
          });
        });

        return this;
    };
 
}( jQuery ));



