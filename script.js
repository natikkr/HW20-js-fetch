async function getResponse(){
    
    let response = await fetch ('https://jsonplaceholder.typicode.com/albums')
    let content = await response.json()
    let list = document.querySelector('.posts')
    

    let key;
    for (key in content){

        list.innerHTML += `
        <li class="posts">
        <h4>${content[key].title}</h4>
        </li>
        `
             
        console.log(response)
    }

function Users (users) {
    for (let i = 0; i < users.length; i++) {
        let user = document.createElement("div");
        user.id = 'user-' + users[i].id;
        user.className = 'user';
        span = document.createElement('span');
        span.innerHTML = users[i].name;
        albums = document.createElement('ul');
        albums.className = 'albums';
        user.appendChild(span);
        user.appendChild(albums);
        user.addEventListener("click", function(){
            let that = this;
            let userId = this.id.split('-')[1];
            let alb = this.getElementsByClassName('albums')[0];
            alb.innerHTML = '';
        })
    }

document.getElementById('users').appendChild(user);

}
function Albums (albums) {
    for (let j = 0; j < albums.length; j++) {
        if (albums[j].userId == userId) {
            console.log(albums[j].userId, ' == ', userId);
            let li = document.createElement('li');
            li.innerHTML = albums[j].title;
            alb.appendChild(li);
            }
        } 
    }
} 


getResponse()



// fetch('https://jsonplaceholder.typicode.com/albums')
// .then(function(resp) {return resp.json() })
// .then(function (data){
//     console.log(data);
//     let key;
//         for (key in content){
//             document.querySelector('.posts').innerHTML += `
//         <li class="posts">
//         <h4>${content[key].title}</h4>
//         <img src="${url}" width="300">
//         </li>
//         `
//     }
//     document.querySelector('.posts').textContent = data[key].title;

// })
// .catch(function (){

// });


// const getResourse = async (url) =>{
//     const response = await fetch (url);
//     if (!response.ok){
//         throw new Error (`Ошибка по адресу ${url}, ствтус ошибки ${response}`);
//     }
//     return await response.json()
// };

// getResourse ('https://jsonplaceholder.typicode.com/albums').then((data)=> console.log(data))

// fetch('https://jsonplaceholder.typicode.com/albums')
//   .then(r => r.json())
//   .then(r => {
//     const list = document.querySelector('.posts');
//     list.innerHTML = r.map(n => `
//       <div class="posts">
//         <div>UserId: ${n.userId}</div>
//         <div>Id: ${n.id}</div>
//         <div>Title: ${n.title}</div>
//       </div>
//     `).join('');
//     document.body.append(list);
//   });
