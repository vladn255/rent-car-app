const MainHeader = ({ additionalStyleName }) => {
    return (
        <header className={`main-header ${additionalStyleName || ""}`}>
            <h1 className="main-header__title" >Need for drive</h1>
            <span className="main-header__location">Ульяновск</span>
        </header>
    )
}

export default MainHeader;