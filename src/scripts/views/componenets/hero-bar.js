class HeroBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
            .hero {
                display: flex;
                min-height: 500px;
                width: 100%;
                background-image: url("./hero/hero-image-large.jpg");
                background-position: center;
                background-color: green;
                object-fit: cover;
            }
            
            .hero-container {
                flex-direction: column;
                text-align: center;
                align-self: center;
                margin: 0 auto;
                max-width: 90%;
            }
            
            .hero-title {
                color: #fcf5ed;
                font-weight: 700;
                font-size: 26px;
            }
            
            .hero-tagline {
                color: #fcf5ed;
                margin-top: 16px;
                font-size: 16px;
                font-weight: 400;
            }

            @media screen and (min-width: 660px) {
                .hero-container {
                    max-width: 65%;
                }
                
                .hero-title {
                    font-size: 36px;
                }
            }

            @media screen and (max-width: 660px) {
                background-image: url('./hero/hero-image-small.jpg');
            }

            

            @media screen and (min-width: 1160px) {
                .hero-container {
                    max-width: 670px;
                }

              }
          </style>
    
        <div id="home" class="hero">
            <div class="hero-container">
                <h2 class="hero-title">
                Temukan Makanan dan Minuman Favorit Sekeluarga
                </h2>
                <p class="hero-tagline">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, odit
                voluptates voluptatibus ex amet corporis totam quis assumenda unde
                labore.
                </p>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-bar', HeroBar);
