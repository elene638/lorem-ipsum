import React from 'react'
import Text from './data'

function App() {

    const [text, setText] = React.useState([])
    const [number, setNumber] = React.useState(0)

    function handleSubmit (event) {
        event.preventDefault()
        console.log(number)
        let count = number
        if (number < 0) {
            count = 0
        }
        if (number > 8) {
            count = 8
        }
        setText(Text.splice(0, count))
    }


    return (
        <div className='main'>
            <div>
                <h1>TIRED OF BORING LOREM IPSUM?</h1>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>Paragraphs: </label>
                <input placeholder='0' type='number' id='amount' name='amount' value={number} onChange={(event) => setNumber(event.target.value)}></input>
                <button type='submit' >Generate</button>
            </form>
            <article>
                {text.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
            </article>
        </div>
    )
}

export default App;
