

const status = document.getElementById("status");
const postsContainer = document.getElementById("postsContainer");


async function loadPosts() {

    try {
        
        status.textContent = "Идет загрузка постов...";

       
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

     
        if (!response.ok) {
            throw new Error("Ошибка сервера: " + response.status);
        }


        const posts = await response.json();

    
        status.textContent = "";

   
        posts.forEach(post => {

       
            const card = document.createElement("div");
            card.className = "post-card";

            const title = document.createElement("h3");
            title.textContent = post.title;

          
            const body = document.createElement("p");
            body.textContent = post.body;

            
            card.appendChild(title);
            card.appendChild(body);

          
            postsContainer.appendChild(card);
        });

    } catch (error) {

        
        status.textContent = "Ошибка загрузки: " + error.message;
        status.className = "error";

   
        console.log(error);
    }
}


loadPosts();
