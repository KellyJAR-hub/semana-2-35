window.onload = function loadPage() { 
    callApi();
}

const callApi = async() => {
    const resultText = await fetch('assets/top-headlines.json', {
        method: 'GET',
        mode: 'no-cors'
    });

    let news;

    if (resultText.ok) {
        news = await resultText.json();

        if (news.status == 'ok' && news.totalResults > 0) {
            modifyNews(news.articles);
        }
    }
}

function modifyNews(articles) {
    // Obtener el total de articulos
    var total = articles.length;
    var news = [];

    if (total > 4) {
        for (var i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * articles.length);
            news.push(articles.splice(index, 1)[0]);
        }
    } else {
        news = articles.splice();
    }

    var news_containers = document.getElementsByClassName("news-container");
    var news_container = news_containers[0];

    var news_iterator = news.values();

    for (let my_news of news_iterator) {
        addNewsToContainer(my_news, news_container);
    }
}

function addNewsToContainer(news, news_container) {
    const div_news = document.createElement('div');
    div_news.className = 'col-lg-6 col-xs-12';

    var html = '<div class="d-flex justify-content-center align-items-center">';
    html +=     '<div class="p-3">';
    html +=         '<img src="'+news.urlToImage+'" width="300em" height="300em" ';
    html +=             'viewBox="0 0 16 16" class="bi bi-alarm-fill" fill="currentColor" ';
    html +=             'alt="'+news.title+'" />';
    html +=     '</div>';
    html +=     '<div class="p-2">';
    html +=         '<h5 class="card-title">'+news.title+'</h5>';
    html +=         '<hr>';
    html +=         '<p>'+news.description+'</p>';
    html +=         '<hr />';
    html +=         '<div class="d-flex container-fluid justify-content-end pb-2 mt-n2">';
    html +=             '<a href="'+news.url+'"';
    html +=                 'class="btn btn-outline-info" target="_blank">Noticia Completa</a>';
    html +=         '</div>';
    html +=     '</div>';
    html += '</div>';

    div_news.innerHTML = html;

    news_container.appendChild(div_news);
}