
import user1img from '/src/assets/user-1.jpg'
import user2img from '/src/assets/user-2.jpg'
import user3img from '/src/assets/user-3.jpg'

export const Testimonials = () => {


  return (
    <section className="section" id="section--3">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Not sure yet?</h2>
        <h3 className="section__header">
          Millions of Teams are already making their lifes simpler.
        </h3>
      </div>

      <div className="slider">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="slide slide--1">
                <div className="testimonial">
                  <h5 className="testimonial__header">I make a promise and record it in my Todoist so I can't forget.</h5>
                  <blockquote className="testimonial__text">
                    I have a side business. And I am always telling people that I will do something and then forget. 
                    Now, I make a promise and record it in my TaskWeb so I can't forget. My business is better because of it!
                  </blockquote>
                  <address className="testimonial__author">
                    <img src={ user1img } alt="" className="testimonial__photo" />
                    <h6 className="testimonial__name">Aarav Lynn</h6>
                    <p className="testimonial__location">San Francisco, USA</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="slide slide--2">
                <div className="testimonial">
                  <h5 className="testimonial__header">
                    TaskWeb is helping me stay on top of a really complex range of tasks
                  </h5>
                  <blockquote className="testimonial__text">
                    By using TaskWeb every day I've become more productive than anytime in my life. 
                    I can't express how much I love your software. It's the first thing I look at in the AM and the last thing 
                    I do before bed, organize next days tasks. Truly love it!
                  </blockquote>
                  <address className="testimonial__author">
                    <img src={ user2img } alt="" className="testimonial__photo" />
                    <h6 className="testimonial__name">Miyah Miles</h6>
                    <p className="testimonial__location">London, UK</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide slide--3">
                <div className="testimonial">
                  <h5 className="testimonial__header">
                    TaskWeb made my life drastically better, it helped me declutter my brain to focus on the important things.
                  </h5>
                  <blockquote className="testimonial__text">
                    This app has been a fantastic tool in helping me stay organized and on track. 
                    Pro was a great decision and I am excited to have my work and personal life on track!
                    TaskWeb has provided just the tool I need for managing work that can so easily fall through the cracks. 
                    I recommend it to managers of small businesses - it can keep you from missing deadlines and due dates.
                  </blockquote>
                  <address className="testimonial__author">
                    <img src={ user3img } alt="" className="testimonial__photo" />
                    <h6 className="testimonial__name">Francisco Gomes</h6>
                    <p className="testimonial__location">Lisbon, Portugal</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}
