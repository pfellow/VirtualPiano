document.addEventListener("keydown", function(event) {
    const whiteKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
    const blackKeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];
    if (whiteKeys.indexOf (event.code) !== -1) {
        let audio = new Audio(`white_keys/${event.key.toUpperCase()}.mp3`);
        audio.play();
    } else if (blackKeys.indexOf (event.code) !== -1) {
        let audio = new Audio(`black_keys/${event.key.toUpperCase()}.mp3`);
        audio.play();
    } else {
        console.warn(`A wrong key is pressed`);
    }
});