export function getArticles(counterClick) {
    const url = "https://dummyjson.com/posts/" + counterClick;

    return fetch(url).then(data => data.json())
}