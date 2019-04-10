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
    .then(function(response) {
        let posts = response.json(); //posts type Promise
        return posts;
       })
    //work for result 
    .then(function(posts){
        console.log(posts); 
        //alert(toString.call(posts));
        
        //work for posts type Array
        let filteredPosts = posts.filter(function(post){
                //метод для удаления пробелов
                let postTitle = post.title;
                let titleWithoutSpaces = postTitle.replace(/\s/g, '');
                //фильтрация
                if(titleWithoutSpaces.length < 30) { return post; }
            }
        );
        console.log(filteredPosts);
        return filteredPosts;
    })
    //sort posts
    .then(function(posts){
        //func for sort descending
        function sortArray(paramA, paramB){
            if(paramB.id < paramA.id) 
                { return -1;}
            else if(paramB.id > paramA.id) 
                { return 1;}
            else 
                { return 0;}
        }
        //work sort
        posts.sort(sortArray);
        console.log(posts);
        return posts;
    })
    //create div (don't work)
    .then(function(posts){
        var divMain = document.createElement('div');
        document.body.appendChild('div');
        for(let i=0; i<posts.length; i++){
            let post = posts[i];
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(post));
            divMain.appendChild(div);
        }
    });