import React from 'react'

const About = (props) => {
    // const [style,setStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    let style = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'? 'black':'white',
        border : '1px solid',
        borderColor : props.mode === 'dark'?'white':'black'
    }

    // const [btntext,setBtntext]=useState("Enable dark mode")
    // const toggleStyle =()=>{
    //     if(style.color=="white"){
    //         setStyle({
    //             color:"black",
    //             backgroundColor:"white",
    //             border:"1px solid white"
    //         })
    //         setBtntext("Enable Dark mode")
    //     }else{
    //         setStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border:"1px solid black"
    //         })
    //         setBtntext("Enable Light mode")
    //     }
    // }
    return (
        <div className='container'>
            <h1 className='my-4' style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={style}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            NextUtils gives you a way to analyze your text quickly and effectively. Be it word count, character count
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            NextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. NextUtils reports the number of words and characgter. this it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            This word counter software workds in any webbrowsers such as chrome, firefox, internet explorer, safari, opera. It suits to count characters in facebook,blog,books,excel document,pdf document,essays,etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                <button className='btn btn-primary' onClick={toggleStyle}>{btntext}</button>
            </div> */}
        </div>
    )
}

export default About
