const Navigation = (props) =>{
    return (
        <nav className={`navbar navbar-expand-lg border-bottom border-body ${props.mode}`}
          data-bs-theme={props.mode === props.modes['light'] ? 'light' : 'dark'}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Theme
                    </a>
                    <ul className="dropdown-menu">
                        {Object.keys(props.modes).map((key) =>(
                            <li key={key}>
                                <a className="dropdown-item" href="#" 
                                onClick={() =>props.handleSelect(key)}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </a>
                            </li>    
                        ))}                        
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">


                    <div class="form-check form-switch">
                        <input class="form-check-input" 
                        type="checkbox" 
                        onClick={props.toggleMode}
                        id="toggleSwitch"/>
                        <label class="form-check-label" style={ {color:`${props.mode === props.modes['light']? 'black': 'white'}`}}
                            for="toggleSwitch">
                            {props.mode === 'bg-dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
                        </label>
                    </div>
                    
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;