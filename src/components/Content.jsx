import {React, useState} from 'react';

const Content = (props) =>{
    const [text, setText] = useState("");
    const [option, setOption] = useState("");
    const [textWords, setTextWords] = useState(0);
    const [textChars, setTextChars] = useState(0);

    const handleTextChange = (e) =>{
        setText(e.target.value);
        countTextChars(text);
        countTextWords(text);
    }

    const countTextWords = (text) =>{
        setTextWords(text.split(" ").length);
    }

    const countTextChars = (text) =>{
        setTextChars(text.replace(/ /g, "").length);
    }
    
    const handleOptionChange = (selectedOption) => {
        setOption(selectedOption);
    }


    const handleSubmit = () =>{
        switch(option){
            case 'Capitalize Words':
                setText(text
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(" ")
                );
                break;
            case 'Capitalize sentences':
                setText(text
                    .split(". ")
                    .map((sentence) =>sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
                    .join(". ")
                );
                break;
            case 'UPPERCASE':
                setText(text.toUpperCase());
                break;
            case 'lowercase':
                setText(text.toLowerCase());
                break;
            default:
                setText(text);
        }
    }
    return (
        <div className={`container-fluid d-flex flex-column ${props.mode === props.modes['dark'] ? 'bg-dark text-light': ''}`} style={{height: "100vh"}}>
            <div className="container d-flex flex-column align-items-center my-5">   
                <textarea 
                    className={`form-control mb-3 ${props.mode === 'bg-dark' ? 'bg-dark text-light border-secondary' : ''}`}
                    name="content" 
                    id="content" 
                    rows="10"
                    placeholder="Enter your Text" 
                    value={text}
                    onChange={handleTextChange}
                    maxLength={1000}>

                </textarea>

                <div className="d-flex justify-content-between w-100" >
                    <div className="d-flex align-items-center" style={{gap: "10px"}}>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {option || "Select Option"}
                            </a>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" 
                                    onClick={()=>handleOptionChange("Capitalize Words")}>Capitalize Words</button></li>
                                <li><button className="dropdown-item" 
                                    onClick={()=>handleOptionChange("Capitalize sentences")}>Capitalize sentences</button></li>
                                <li><button className="dropdown-item" 
                                    onClick={()=>handleOptionChange("UPPERCASE")}>UPPERCASE</button></li>
                                <li><button className="dropdown-item" 
                                    onClick={()=>handleOptionChange("lowercase")}>lowercase</button></li>
                            </ul>
                        </div>

                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>

                    <div className="text-end">
                        <h2> Text summary</h2>
                        <p>Total words: {textWords}</p>
                        <p>Total characters: {textChars}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;