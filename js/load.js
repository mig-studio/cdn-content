window.addEventListener("message", receiveMessage, false);
function receiveMessage(event){
    if(event.data.consultantHeight)
        window.parent.document.getElementById('consultant-list-opener').style.height = event.data.consultantHeight +'px';
    if(event.data.consultantInit) {
        if(!localStorage.browserId) localStorage.browserId = '_' + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
        if(!window.parent.document.getElementById("consultant-list-opener").src.includes(localStorage.browserId))
            window.parent.document.getElementById("consultant-list-opener").src = window.parent.document.getElementById("consultant-list-opener").src + '&chat=' + localStorage.browserId;
    }
    if(event.data.consultantReset) {
        localStorage.browserId = '_' + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
        if(!window.parent.document.getElementById("consultant-list-opener").src.includes(localStorage.browserId))
            window.parent.document.getElementById("consultant-list-opener").src = window.parent.document.getElementById("consultant-list-opener").src + '&chat=' + localStorage.browserId;
    }
}