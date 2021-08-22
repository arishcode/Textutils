import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked :" + Text)
        let newtext = Text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked :" + Text)
        let newtext = Text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked :" + Text)
        let newtext = '';
        setText(newtext)
    }
    const handleCapitalClick = ()=>{
        // console.log("Uppercase was clicked :" + Text)
        let newtext = Text.replace(/^\w/, (c) => c.toUpperCase());
        setText(newtext)
        props.showAlert("Converted to Capitalize", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    
    const [Text, setText] = useState('Enter text here');
    // Text = "new text"; // Wrong way to change the state
    // setText("new text") // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={Text} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="5"></textarea>
            </div>
            <button className= "btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className= "btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className= "btn btn-primary mx-1 my-1" onClick={handleCapitalClick}>Convert to Capitalize</button>
            <button className= "btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{Text.split(" ").length} Words {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
