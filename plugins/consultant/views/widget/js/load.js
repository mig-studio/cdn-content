window.addEventListener("message",receiveMessage,!1);function receiveMessage(t){t.data.consultantHeight&&(window.parent.document.getElementById("consultant-list-opener").style.height=t.data.consultantHeight+"px"),t.data.consultantInit&&(localStorage.browserId||(localStorage.browserId="_"+Math.random().toString(36).substr(2,9)+Math.random().toString(36).substr(2,9)),window.parent.document.getElementById("consultant-list-opener").src.includes(localStorage.browserId)||(window.parent.document.getElementById("consultant-list-opener").src=window.parent.document.getElementById("consultant-list-opener").src+"&chat="+localStorage.browserId)),t.data.consultantReset&&(localStorage.browserId="_"+Math.random().toString(36).substr(2,9)+Math.random().toString(36).substr(2,9),window.parent.document.getElementById("consultant-list-opener").src.includes(localStorage.browserId)||(window.parent.document.getElementById("consultant-list-opener").src=window.parent.document.getElementById("consultant-list-opener").src+"&chat="+localStorage.browserId))}