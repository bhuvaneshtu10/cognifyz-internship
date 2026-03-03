function loadPosts(){

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(response => response.json())
    .then(data => {

        let postsList = document.getElementById("posts");
        postsList.innerHTML = "";

        data.forEach(post => {
            let li = document.createElement("li");
            li.textContent = post.title;
            postsList.appendChild(li);
        });

    })
    .catch(error => {
        console.log("Error fetching data:", error);
    });

}
