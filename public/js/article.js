var url = window.location.href
var index = url.substring(url.lastIndexOf("/")+1);



document.addEventListener("DOMContentLoaded",() => {
    refreshState();
});

function refreshState() {
    fetch('/api/blog/'+index)
    .then(res => res.json())
    .then(data => {
        var section = document.querySelector("#section");
        section.innerHTML = "";
        title = createDiv(data.title);
        content = createDiv(data.content);
        br = document.createElement("br");
    }) .then (() => {
        section.appendChild(title);
        section.appendChild(br);
        section.appendChild(content);
    })
}

function createDiv(content) {
    div = document.createElement("div");
    div.innerHTML = content;
    return div;
}

document.querySelector("#change_title").addEventListener("submit", function (event) {
    event.preventDefault();
    const entries = [];
    const titleToJson =  document.querySelector('#title').value
    const contentToJson = document.querySelector('#content').value
    if(titleToJson) {
        entries.push(['title', titleToJson]);
    }
    if(contentToJson) {
        entries.push(['content', contentToJson]);
    }
    fetch('/api/blog/'+index, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(entries))
    }).then(() => {
        document.querySelector('#change_title').reset();
        refreshState()
    })
})