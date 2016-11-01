/* global fetch */

const generate = () => {
    fetch("https://raw.githubusercontent.com/leonardr/olipy/master/data/word-lists/nouns.json")
        .then(plain => plain.json())
        .then(json => {
            const getRandom = (arr) => {
                return arr[Math.floor(Math.random() * arr.length)]
            }
            const type = ['Imperative', 'Declaritive']
            const language = ['JavaScript', 'CoffeeScript', 'TypeScript']
            const based = ['jQuery', 'React', 'Angular', 'Vue']
            const split = json.nouns[Math.floor(Math.random() * json.nouns.length)].split('')
            split[0] = String.fromCharCode(split[0].charCodeAt(0) - 32)
            const noun = split.join('')
            console.log(noun)
            const data = ['JSON', 'XML']
            const final = `<center><h1>${noun}</h1></center>
            <br>
            \t<p>${noun} is a new ${getRandom(language)} framework inspired by ${getRandom(based)}. This new library can be got from npm using -
            <br>
            <br>
            <center><code>npm install ${noun.toLowerCase()}</code></center>
            <br>
            <br>
            <br>
            <h2>Features</h2>
            <ul>
                <li> <b>${getRandom(type)}</b>: Syntax recognized by many programmers makes it much easier to use, as many people are familiar with this kind of programming.</li>
                <li> <b>It's Just JavaScript</b>: It's nothing more than simple JavaScript in the end, just makes everything a little easier. </li>
                <li> <b>Small</b>: Is only ${Math.floor(Math.random() * 1000)}kb!</li>
                <li> <b> Useful DOM</b>: The DOM is in ${getRandom(data)} format, so you don't need to learn a whole new kind of DSL! </li>
            </ul>
            </p>`
            document.getElementById('result').innerHTML = final;
        })
    
    
}