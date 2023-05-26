import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem';

export const FriendList =
  ({ friends }) => (

    <ul className={css["friend-list"]}> 
      {friends.map(friend => {

        return (
          <li key={friend.id} className={css.item}>
            <FriendListItem friend={friend} />
          </li>
        )
      })}
    </ul>
  );

