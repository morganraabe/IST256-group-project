function loadData(PersonalData){
    console.log(PersonalData);
    //dumps onto webpage
    //var div =$('<div></div>').append(JSON.stringify(tripInfo));
        $("#content").empty();
        for(let i = 0; i < PersonalData.length; i++){
            const oneUser = PersonalData[i];
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
    
//the first setData was not working for me so i made this one(below), it wasnt working also but it was giving me an error
//so i think one of the variables is bad

*/function setData(){
    const bio = $('#updateBio')[0].value;
    const username = $('#updateUsername')[0].value;
    $.post("/setProfile", {bio,username}, loadData);
}/* 
    
}
