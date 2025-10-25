import { getImageUrl } from '../utils/utils.js';

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
      style={{
        borderRadius: '50%',
      }}
    />
  );
}

export default Avatar;

