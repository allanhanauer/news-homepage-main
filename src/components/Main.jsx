import "./Main.css";
import imgMain from "../assets/image-web-3-desktop.jpg";
import img1 from "../assets/image-retro-pcs.jpg";
import img2 from "../assets/image-top-laptops.jpg";
import img3 from "../assets/image-gaming-growth.jpg";
const Main = () => {
  return (
    <main>
      <section className="img-main">
        <img src={imgMain} id="primary-img" alt="img-main" />
      </section>
      <section className="title">
        <h1>The Bright Future of Web 3.0?</h1>
      </section>
      <section className="desc">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read More</button>
      </section>
      <section className="new">
        <h2>New</h2>

        <article>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>
        <hr />
        <article>
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <hr />
        <article>
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            {" "}
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </section>
      <figure id="t1">
        <img src={img1} className="box" alt="{retro-pc}" />
        <legend className="top-l">
          <h3 className="top-t">01</h3>
          <h4 className="top-t2">reviving retro PCs</h4>
          <p className="top-p">
            What happens when old PCs are given modern upgrades?
          </p>
        </legend>
      </figure>
      <figure id="t2">
        <img src={img2} className="box" alt="{retro-pc}" />
        <legend className="top-l">
          <h3 className="top-t">02</h3>
          <h4 className="top-t2">Top 10 Laptops of 2022</h4>
          <p className="top-p">Our best picks for various needs and budgets.</p>
        </legend>
      </figure>
      <figure id="t3">
        <img src={img3} className="box" alt="{retro-pc}" />
        <legend className="top-l">
          <h3 className="top-t">03</h3>
          <h4 className="top-t2">The Growth of Gaming</h4>
          <p className="top-p">
            How the pandemic has sparked fresh opportunities.
          </p>
        </legend>
      </figure>
    </main>
  );
};

export default Main;
