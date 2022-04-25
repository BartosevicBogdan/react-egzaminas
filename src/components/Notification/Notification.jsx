import css from './Notification.module.css';

const Notification = ({notificationObj}) => {
    console.log('notificationObj.showNotification', notificationObj.showNotification)
  return (
    <div className={notificationObj.showNotification ? '': 'hide'} >
      <div className={css.notification} >
        {notificationObj.notificationBody.title}
      </div>
    </div>
  )
}

export default Notification