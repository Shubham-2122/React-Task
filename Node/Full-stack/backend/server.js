import express from 'express';

const app = express();

// middlerwire
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('server is ready')
// });




// get a list of 5 jokes
// routes
app.get('/api/jokes',(req,res)=>{
    const jokes= [
        {
            id:1,
            title:'A joke',
            content: 'This is a Joke'
        },
        {
            id:2,
            title:'Another joke',
            content: 'This is Another Joke'
        },
        {
            id:3,
            title:'a third joke',
            content: 'This is third Joke'
        },
        {
            id:4,
            title:'A four joke',
            content: 'This is four Joke'
        },
        {
            id:5,
            title:'A Five joke',
            content: 'This is Five Joke'
        }
    ];
    res.send(jokes)
})


// basic port banaya
const port = process.env.PORT || 3000;

// listen karva pa
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
});