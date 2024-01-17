const http=require('http')

//the createserver set up a server 
//server keeps on looking for requests
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our homepage')
    }
    if(req.url==='/about'){
        res.end('this is the about page')
    }
    if(req.url==='/info'){
        res.end('this is the informartion page')
    }
    if(req.url==='/bitches'){
        res.end('bag your bitches for free form here')
    }
    res.end(`
        <h1>Ops error 404 page not found</h1>   
        <p>We cant seem to find the page that you are looking for</p>
        <a href="/">HOME PAGE</a>
        `     
    )
    // console.log(req);
})
//specifying what port our server will be listening to
server.listen(5000)

