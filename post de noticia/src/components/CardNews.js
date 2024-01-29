class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  // criando as tags
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "Por: " + (this.getAttribute("autor") || "Anônimo");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("titulo");
    linkTitle.href = this.getAttribute("link-url");

    const postContent = document.createElement("p");
    postContent.textContent = this.getAttribute("content");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImg = document.createElement("img");
    newsImg.setAttribute("class", "img");
    newsImg.src = this.getAttribute("photo") || "assets/png programador.jpg";
    newsImg.alt = "Foto da noticia";

    // colocando as tags como filhas
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(postContent);
    cardRight.appendChild(newsImg);

    return componentRoot;
  }
  //css
  styles() {
    const style = document.createElement("style");
    style.textContent = `.card {
      margin: 50px;
      width: 40%;
      height: 300px;
      box-shadow: 10px 10px 23px -1px rgba(0, 0, 0, 0.76);
      -webkit-box-shadow: 10px 10px 23px -1px rgba(0, 0, 0, 0.76);
      -moz-box-shadow: 10px 10px 23px -1px rgba(0, 0, 0, 0.76);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .card_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card_left > span {
      font-weight: 400;
    }
    
    .card_left > a {
      margin-top: 15px;
      margin-bottom: 5px;
      font-size: 25px;
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
    
    .card_left > p {
      color: rgb(110, 110, 110);
    }

    .img{
      height: 300px;
      width: 400px;
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
