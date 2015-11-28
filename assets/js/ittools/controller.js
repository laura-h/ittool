/**
 * Created by laura on 28.11.15.
 */
var Ittool = {};
$(document).ready(function(){
    $('[data-js]').each(function(){
        var initFunctions = $(this).attr('data-js').replace(' ', '').split(',');

        $.each(initFunctions, function(key, initFunction){
            if (initFunction in Udk) {
                Udk[initFunction].init();
            } else {
                console.log(initFunction + " not found!");
            }
        });
    });
});