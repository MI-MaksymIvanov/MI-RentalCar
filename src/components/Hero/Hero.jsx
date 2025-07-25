import { useNavigate } from "react-router-dom";

import css from "./Hero.module.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className={css.hero}>
      <div className="container">
        <div className={css.heroContainer}>
          <h1 className={css.titleHero}>Find your perfect rental car</h1>
          <p className={css.descriptionHero}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <button
            className={css.btnHero}
            type="button"
            onClick={() => {
              navigate("/catalog");
            }}
          >
            View Catalog
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
