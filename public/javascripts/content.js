function loadData(PersonalData){
    console.log(PersonalData);
    //dumps onto webpage
    //var div =$('<div></div>').append(JSON.stringify(tripInfo));
        $("#content").empty();
        for(let i = 0; i < PersonalData.length; i++){
            console.log(PersonalData[i]);
            const person = PersonalData[i];
            const span=$("<span></span>").append("username: " + PersonalData[i].username);
            const paragraph=$("<p></p>").append(person.username).append(span);
            $("#content").append(paragraph);
    
}}

function getInfo(){
    $.get("/getList", loadData);
}

function setData(){
    const ID=$("#loadID")[0].value;
    const username=$("#updateUsername")[0].value;

    $.post("/setProfile", {userId:id,username:username}, loadData);
}
//the first setData was not working for me so i made this one(below), it wasnt working also but it was giving me an error
//so i think one of the variables is bad

// function setData(){
//     const ID =  $('#updateID')[0].value;
//     const bio = $('#updateBio')[0].value;
//     const username = $('#updateUsername')[0].value;
//     $.post("/setProfile", {ID,bio,username}, loadData);
// }


// function setAddress(){
//     const ID = $('#updateID')[0].value;
//     const location = $('#addAddress')[0].value;
//     $.post("/setAddress", {ID,location}, loadData);
// }

function deleteInfo(){
    const ID = $('#updateID')[0].value;
    const location = 0;
    $.post("/setAddress", {ID,location}, loadData);
}
    
