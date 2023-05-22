function loadImage(input, targetQuery) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(`#${targetQuery}`)
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}

window.addEventListener("load", () => {

})