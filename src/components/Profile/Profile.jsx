import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className={s.topPart}>
          <img className={s.image} src={user.avatar} alt="avatar" />
          <h2 className={s.name}>{user.username}</h2>
          <p className={s.tag}>{user.tag}</p>
          <p className={s.location}>{user.location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.listItem}>
            <p className={s.textStat}>Followers</p>
            {user.followers}
          </li>
          <li className={s.listItem}>
            <p className={s.textStat}>Views</p>
            {user.views}
          </li>
          <li className={s.listItem}>
            <p className={s.textStat}>Likes</p> {user.likes}
          </li>
        </ul>
      </div>
    </div>
    
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
