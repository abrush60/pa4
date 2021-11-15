const baseUrl = "https://abrush60-pa4api.herokuapp.com/api/Post"
//const baseUrl = "https://localhost:5001/api/post"
//update
function getPost(){
    //const allPostsApi = "https://localhost:5001/api/post";
    const allPostsApi = baseUrl;

    fetch(allPostsApi).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((post)=>{
            html += "<li>" + post.text + " Posted by Big Al! </li>";
        })
        html += "</ul>";
        document.getElementById("Post").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function handleOnSubmit(){
    console.log("We made it");
    var postText = document.getElementById("text").value;
    //const placeHolder = document.getElementById("Nothing").value;
    //const addPostsApi = "https://localhost:5001/api/post";
    console.log(postText);
    const addPostsApi = baseUrl;
    var text ={ 
        Text: postText
    }

    PlacePost(text);
}

function handleOnEnter(){
    console.log("We made it");
    var postId = document.getElementById("id").value;
    //const placeHolder = document.getElementById("Nothing").value;
    //const addPostsApi = "https://localhost:5001/api/post";
    console.log(postId);
    const addPostsApi = baseUrl;
    var id ={ 
        Text: postId
    }

    RemovePost(postId);
}

function PlacePost(text){
    const PlacePostUrl = baseUrl;

    fetch(PlacePostUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(text)
    }).then(response=>{
        getPost();
    })
}

function RemovePost(id){
    const RemovePostUrl = baseUrl;

    fetch(RemovePostUrl, {
        method: "PUT",
        headers: {
            "Accept":'application/json',
            "Content-Type": 'application/json' 
        },
        body: JSON.stringify(id)
    }).then(response=>{
        getPost();
    })
}