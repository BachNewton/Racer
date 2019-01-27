function Mouse() {
    this.wheel = 0;

    document.addEventListener('wheel', (e) => { this.wheel += e.deltaY; });
}