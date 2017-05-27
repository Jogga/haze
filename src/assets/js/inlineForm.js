(function(window, document){
    input = document.getElementById("input");
    label = document.getElementById("label");

    input.addEventListener("input", function(){
        if(input.value.length > 0) {
            label.classList.add('hidden');
        } else {
            label.classList.remove('hidden');
        }
    });
})(window, document);