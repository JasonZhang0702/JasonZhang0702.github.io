document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-wechat-open]");
    if (openButton) {
        document.getElementById("wechat-dialog")?.showModal();
        return;
    }

    const closeButton = event.target.closest("[data-wechat-close]");
    if (closeButton) {
        closeButton.closest("dialog")?.close();
        return;
    }

    if (event.target.matches("#wechat-dialog")) {
        event.target.close();
    }
});
