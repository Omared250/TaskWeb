import calendarPro from '/src/assets/Calendar-bro.png'
import onlineCalendarPro from '/src/assets/Online calendar-bro.png'
import organizingProjectsBro from '/src/assets/Organizing projects-bro.png'

export const Features = () => {

  return (
    <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">Features</h2>
          <h3 className="section__header">
            From overwhelmed to on top of it
          </h3>
        </div>
    
        <div className="features">
          <img
            src={ calendarPro }
            data-src="images/digital.jpg"
            alt="Calendar"
            className="features__img"
          />
          <div className="features__feature">
            <div className="features__icon">
            </div>
            <h5 className="features__header">Start each day feeling calm and in control</h5>
            <p>
              TaskWeb gives you the confidence that everything's organized and accounted for, 
              so you can make progress on the things that are important to you
            </p>
          </div>
    
          <div className="features__feature">
            <div className="features__icon">
            </div>
            <h5 className="features__header">Focus your energy on the right things</h5>
            <p>
              TaskWeb surfaces the right tasks at the right times so you always know what to focus on next.
            </p>
          </div>
          <img
            src={ onlineCalendarPro }
            data-src="images/grow.jpg"
            alt="Calendar"
            className="features__img"
          />
    
          <img
            src={ organizingProjectsBro }
            data-src="images/card.jpg"
            alt="Calendar"
            className="features__img"
          />
          <div className="features__feature">
            <div className="features__icon">
            </div>
            <h5 className="features__header">Personalize your task views</h5>
            <p>
              Build your own task views to fit your unique style and workflow.
              Organize your projects with an easy-to-understand layout that can be as simple, or as in-depth, as you need.
            </p>
          </div>
        </div>
    </section>
  )
}
