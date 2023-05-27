import css from './FriendList.module.css'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => (
    <>
        <span id={css.status} className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </>
)