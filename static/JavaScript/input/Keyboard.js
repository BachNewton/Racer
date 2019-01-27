function Keyboard() {
    this.held = {};
    this.code = {};

    document.addEventListener('keydown', (e) => {
        this.held[e.key] = true;
        this.code[e.code] = true;
    });

    document.addEventListener('keyup', (e) => {
        this.held[e.key] = false;
        this.code[e.code] = false;
    });
}