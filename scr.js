function reveal(){
    document.getElementById("hiddenMessage").style.display = 'block';
    window.chrome.webview.postMessage('getData');
}