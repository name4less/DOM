/*
DONE 1. С эндпоинта https://jsonplaceholder.typicode.com/posts получаем список постов.

DONE 2. Далее фильтруем посты по свойству 'title' таким образом, чтобы остались только посты с количеством букв в тайтле меньше 30. 
(Пробелы не учитывать как букву).

DONE 3. Далее сортируем наши данные, которые прошли филтрацию по юзер ай ди. В порядке с набольшего к наименьшему.

DON'T WORK 4. Далее для каждого поста создаем див(контейнер). Внутри которого будут выводится данные о посте. Например:
Юзейр айди: { значение }
ай ди: { значение }
тайтл: { Значение }
боди: { значение }

5. Вешаем на каждый пост событие, по клику на которое в алерт выводится значение тайтла поста, по которому был клик.
И добавляем все созданые посты в DOM дерево.*/

fetch('https://jsonplaceholder.typicode.com/posts')
    //get posts
    .then(response => response.json())   
    //work for result 
    .then(posts => {
        console.log(posts); 
        //work for posts type Array
        let filteredPosts = posts.filter(post =>{
            //метод для удаления пробелов
            let postTitle = post.title;
            let titleWithoutSpaces = postTitle.replace(/\s/g, '');
            //фильтрация
            if(titleWithoutSpaces.length < 30) { return post; }
        });
        console.log(filteredPosts);
        return filteredPosts;
    })
    //sort posts
    .then(posts =>{
        posts.sort((paramA, paramB) => paramB.id - paramA.id);
        console.log(posts);
        return posts;
    })
    //create div (don't work)
    .then(function(posts){
        let divMain = document.createElement('div'); //create new DOM elem
        for(let i=0; i<posts.length; i++){
            let post = posts[i];
            posts.currentTarget;
            let postCont = document.createElement('div');
            
            const idUserDiv = document.createElement('div');
            idUserDiv.innerText = ('\r{\r idUser: '+post.userId);
            postCont.appendChild(idUserDiv);
            
            const idDiv = document.createElement('div');
            idDiv.innerText = ('id: '+post.id);
            postCont.appendChild(idDiv);
            
            const titleDiv = document.createElement('div');
            titleDiv.innerText = ('title: '+post.title);
            postCont.appendChild(titleDiv);
            
            const bodyDiv = document.createElement('div');
            bodyDiv.innerText = ('body: '+post.body+'\r}');
            postCont.appendChild(bodyDiv);
            
            function onClick(cl){
                alert(post.title);
            }
            postCont.addEventListener('click', onClick);
            divMain.appendChild(postCont);
        }
        document.body.appendChild(divMain); //add div in document like child elem
        //return posts;
    });