import "./style.css"

const Header = () =>{
    return (
        <div className="header-wrapper">
            <p>HEADER</p>
            <div>
                <ul>
                    <li><a href="/">Головна</a></li>
                    <li><a href="/page-1">Перша сторінка</a></li>
                    <li><a href="/page-2">Друга сторінка</a></li>
                    <li><a href="/page-3">Третя сторінка</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header