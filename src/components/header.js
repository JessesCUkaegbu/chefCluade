import chefImg from "../img/chef-img.png";

function Header() {
    return (
        <main>
            <div className="header">
             <img src={chefImg} alt="loading"></img>
             <h1>Chef Claude</h1>
            </div>
        </main>
    );
}

export default Header;