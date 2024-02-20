function ProfileCard(props) {
  return (
    <div className="card">
      <figure className="image is-1by1">
        <img src={props.image} className="card-image" />
      </figure>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{props.title}</p>
          <p className="subtitle is-6">Handle is {props.handle}</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
