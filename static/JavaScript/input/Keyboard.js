function Keyboard() {
    this.held = {};

    document.addEventListener('keydown', (e) => { this.held[e.key] = true; });
    document.addEventListener('keyup', (e) => { this.held[e.key] = false; });
}