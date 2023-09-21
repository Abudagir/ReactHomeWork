import "./CourseCard.css";

const CourseCard = (props) => {
  const percentOfCourse =
    (props.courses.finishedModules / props.courses.modules) * 100;

    function secondsToHoursMinutes(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
  
      return { hours, minutes };
  }
  const {hours, minutes} = secondsToHoursMinutes(props.courses.duration)
  return (
    <div className="card">
      <div className="image__container">
        <img src={props.courses.image} alt="" />
        <div className="level">{props.courses.level}</div>
      </div>
      <h3 class="card__title">{props.courses.title}</h3>

      <div class="card__info">
        <div class="user">
          <img src={props.courses.user.avatar} alt={props.courses.user.name} />
          <p>{props.courses.user.name}</p>
        </div>
        <div class="rating">
          <p>{props.courses.rating}</p>
        </div>
      </div>

      {/* {props.isMyCourse ? "My Course" : ''} */}
      {props.isMyCourse ? (
        <div>
          <progress value={percentOfCourse} max="100">
            {percentOfCourse}%
          </progress>
          <div className="card__info">
            <p>
              {props.courses.finishedModules} / {props.courses.modules} Modules
            </p>
            <div>{percentOfCourse} %</div>
          </div>
        </div>
      ) : (
        <div class="card__info">
          <div>{props.courses.students} Student</div>
          <div>{props.courses.modules} Modules</div>
          <div>{hours}h {minutes}m</div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
