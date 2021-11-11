var tweets = ["Hey its Big Al", "Me Again", "42-21"];

function setGreets(){
    var html = "<ul>";

    tweets.forEach((tweet)=>{
    "<li><div class=\"avatar\"></div><span>" + tweet + "</span></li>";
    });
    html += "</ul>";
}

function handleOnLoad(){
    setGreets();
}

addPost = function(){
    let postText = document.getElementById("post").value;
    tweets.push(postText);
    setGreets();
}

function handleOnSubmit(){
    addPost();
}