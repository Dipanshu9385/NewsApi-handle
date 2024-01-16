import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Header from './Component/Header';

function App() {
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [category, setCategory] = useState('general')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const responce = await axios.get(`/api/news?category=${category}`)
        console.log(responce.data)
        setArticle(responce.data)
      } catch (error) {
        setError(error)
        console.log(error.message)
      }
      setLoading(false)
    })()
  }, [category])



  return (
    <div className='flex flex-col justify-center items-center '>
      <Header setCategory={setCategory} />
      {
        error && <h3>{error.message}</h3>
      }

      {
        loading ? <h1 className=' mt-64 text-3xl text-blue-700 text-center font-semibold' >Please wait content is Loading .....</h1> : (<div className='flex flex-wrap gap-6 justify-center max-w-[80vw] mt-10'>
          {
            article.length > 0 && article.map((item) => {
              return <div key={item.publishedAt} className='max-w-[350px] flex flex-col items-center justify-between gap-4 mt-4'>
                <h3 className='text-lg font-bold cursor-pointer'>{item.title}</h3>
                <img src={item.urlToImage} width="260px" alt="" />
                <p className='text-sm'>{item.description}</p>
                {/* <p className='mr-[100px]'>{item.url}</p> */}
              </div>
            })
          }
        </div>
        )
      }
    </div>
    )
}
export default App;

