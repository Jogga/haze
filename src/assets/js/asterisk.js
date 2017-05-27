(function(window, document){
    element = document.getElementById("best-annotated");
    element.addEventListener("click", function(){
        document.getElementById("annotation").classList.toggle('hidden');
    });
})(window, document);