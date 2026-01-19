// Toggle news item expansion
function toggleNews(header) {
    const newsItem = header.parentElement;
    newsItem.classList.toggle('active');
}

// Load more news items
let currentNewsCount = 5;
const allNewsItems = document.querySelectorAll('.news-item');

function loadMore() {
    const hiddenNews = Array.from(allNewsItems).slice(currentNewsCount);
    
    if (hiddenNews.length === 0) {
        document.getElementById('load-more').classList.add('hidden');
        return;
    }
    
    const toShow = hiddenNews.slice(0, 5);
    toShow.forEach(item => {
        item.style.display = 'block';
    });
    
    currentNewsCount += toShow.length;
    
    if (currentNewsCount >= allNewsItems.length) {
        document.getElementById('load-more').classList.add('hidden');
    }
}

// Hide extra news items on load
document.addEventListener('DOMContentLoaded', function() {
    allNewsItems.forEach((item, index) => {
        if (index >= 5) {
            item.style.display = 'none';
        }
    });
    
    if (allNewsItems.length <= 5) {
        document.getElementById('load-more').classList.add('hidden');
    }
});