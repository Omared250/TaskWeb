

export const AboutUS = () => {
  return (
    <div className="header__title">
        <h1>
          Organize your
          <span className="highlight">team with</span>
          TaskWeb 
          <span className="highlight">Business</span>
        </h1>
        <h4>Get a clear overview of everything your team is working on - what's already been done and what's coming up next.</h4>
        <a className="btn--text btn--scroll-to" href="#section--1">Learn more</a>
        <img
            src="/src/assets/Scrum board-bro.png"
            className="header__img"
            alt="calendar items"
        />
    </div>
  )
}

