function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
};

loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('post');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        // console.log(post.title)
    }
};

//404 post
function addPost2() {
    fetch('https://jsonplaceholder.typicode.com/posasts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'My new post',
                body: 'This is my post',
                id: 1
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
}


function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'My new post',
                body: 'This is my post',
                id: 1
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
}