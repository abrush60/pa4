function getPost(){
    const allPostsApi = "https://localhost:5001/api/post";

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

function addPost(){
    const addPostsApi = "https://localhost:5001/api/post";
    const postText = document.getElementById("text").value;
    
    fetch(addPostsApi, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body : JSON.stringify({
            text: postText
        })
    })
    .then((response)=>{
        console.log(response)
        getPost();
    })
}