document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('header-placeholder').innerHTML = xhr.responseText;
            } else {
                console.error('Failed to load header:', xhr.status, xhr.statusText);
            }
        }
    };
    xhr.send();
});
