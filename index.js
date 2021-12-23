/**
 * sends a postMessage to the Windows UWP host
 */
function sendEventToHost() {
    if(window.chrome && window.chrome.webview && window.chrome.webview.postMessage) {
        let _message = {
            method: "onTestMessageSent",
            message: "Test message"
        }
        document.querySelector("#message").innerHTML = "🎉 UWP WebView2 host detected 🎉";
        window.chrome.webview.postMessage(JSON.stringify(_message));
    }
    else {
        document.querySelector("#message").innerHTML = "UWP WebView2 host not detected 😢.";
    }
}


/**
 * Clears the message in the result card
 */
function reset() {
    document.querySelector("#message").innerHTML = "";
}

document.getElementById("sendBtn").addEventListener("click", sendEventToHost);
document.getElementById("clearBtn").addEventListener("click", reset);