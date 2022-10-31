function loadData(PersonalData){

    //dumps onto webpage
    //var div =$('<div></div>').append(JSON.stringify(tripInfo));
        $("#content").empty();
        const span=$("<span></span>").append("username: " + PersonalData[0].username);
        const paragraph=$("<p></p>").append(person[0].username).append(span);
        $("#content").append(div);
    
}

function getInfo(){
    $.get("/getList", loadData);
}

function setData(){
    const name=$("#updateProfile")[0].value;

    $.post("/setProfile", {id,username}, loadData);
}
