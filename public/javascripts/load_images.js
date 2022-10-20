function updatesImages(data){

    //creates html equiv of <img src="myImage.jpg"></img>
    for(i=0; i<data.length; i++){
        const imageInfo=data[i];
        const span =$("<span>").text(imageInfo.title);
        const img = $("<img/>").attr("src", "/images/"+imageInfo.image);
        const div = $("<div></div>").append(span).append(img);
        $("#images").append(div);
    }
}

function loadOneImage(data) {
    const randomIndex =Math.floor(Math.random()*5);
    const imageInfo=data[randomIndex];
    const span =$("<span>").text(imageInfo.title);
    const img = $("<img/>").attr("src", "/images/"+imageInfo.image);
    const div = $("<div></div>").append(span).append(img);
    $("#images").append(div);
}

$(document).ready(function(){
    //AJAX call, requests data from server
    $.get("data/images.json", updatesImages);
});

function loadRandomImage() {
    $.get("data/images.json", loadOneImage);
}

$(document).ready(function(){
    $("#searchBar").on("keyup", function(){
        var value=$(this).val().toLowerCase();
        $("#images div").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
    });
});
});