import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo_agenda.svg" alt="" />
                <span>Agenda Service</span>
                
            </div>
            <div className="icons">
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="user1.png" alt="" />
                    <span>José</span>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;