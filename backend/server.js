import express from 'express';
import 'dotenv/config'
import axios from 'axios';
const app = express();

app.get('/api/news', async (req, res) => {
  const category = req.query.category ;
  const apiKey=process.env.KEY;
  console.log(process.env.API_KEY)
  try {
    const api = `https://newsapi.org/v2/top-headlines?country=in&category=${category}` +"&apikey="+ apiKey;
    const responce = await axios.get(api)
    const apiNews = responce.data.articles
    res.send(apiNews)

  } catch (error) {
    console.log("server js error", error)
  }

})

const port = process.env.port || 4000
app.listen(port, () => {
  console.log(`Port is running on ${port}`)
})