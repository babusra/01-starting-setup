import "./Photo.css";

function Photo(props) {
  return (
    <div>
      <div>
        <img className="photo" src={props?.photoUrl} />
      </div>
    </div>
  );
}
export default Photo;
