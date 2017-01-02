
// Developed by Casper Alex Panduro 

(function ( $ ) {
    $.fn.moveit = function( options ) {
        var settings = $.extend({
            // These are the defaults.
            sensitivity: 10,
            rotate: false,
            rotateSensitivity: 30,
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
          if(settings.rotate == true) {
            moveit.css({
                "transform": 'translate('+yWidth*settings.sensitivity+'px, '+yHeight*settings.sensitivity+'px) rotateY('+-yWidth*settings.rotateSensitivity+'deg)'
            });
          }
          else {
            moveit.css({
                "transform": 'translate('+yWidth*settings.sensitivity+'px, '+yHeight*settings.sensitivity+'px)'
            });
          }
          

        });

        function rotate() {
            var yHeight = (event.pageY - $(window).scrollTop() ) / (wHeight/2) -1;
            var yWidth = event.pageX / (wWidth/2) -1;
            moveit.css({
                "transform": 'rotateX:'+yWidth*settings.sensitivity,
            });
            console.log("rotate");
        }

        return this;
    };
 
}( jQuery ));



