function loadData(PersonalData){
    console.log(PersonalData);
    //dumps onto webpage
    //var div =$('<div></div>').append(JSON.stringify(tripInfo));
        $("#content").empty();
        for(let i = 0; i < PersonalData.length; i++){
            const person = PersonalData[i];
            const span=$("<span></span>").append("username: " + PersonalData[0].username);
            const paragraph=$("<p></p>").append(person[0].username).append(span);
            $("#content").append(div);
    
}}

function getInfo(){
    $.get("/getList", loadData);
}

//currently gives 500 error, need to connect to database
function setData(){
    const id=$("#loadID")[0].value;
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
    

