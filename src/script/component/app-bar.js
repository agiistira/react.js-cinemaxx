class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();

    }

    render() {
        this.innerHTML = `
        <h1>21Cinemaxx</h1>\<h3>Watch Your Favorite Movies And Find Your Favorite Meal</h3>
        `;
    }
}

customElements.define("app-bar", AppBar);