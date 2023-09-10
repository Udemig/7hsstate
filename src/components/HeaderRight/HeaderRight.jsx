import './HeaderRight.css'


export default function HeaderRight({userName}){


    return(
        <div className="header-right">
        <div>
          <span className="online-user">Aktif Kullanıcı Sayısı: </span>
          <span className="count">25</span>
        </div>
        <h3 className="user-name">{userName}</h3>
      </div>
    )
}