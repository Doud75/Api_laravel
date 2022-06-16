document.querySelector('#myForm').addEventListener('submit', function (event) {
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
    fetch('/api/blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title' : document.querySelector('#title').value,
            'content' : document.querySelector('#content').value
        })
    }).then(() => {
        document.querySelector('#myForm').reset();
    })
})