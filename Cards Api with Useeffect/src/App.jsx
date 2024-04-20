import { useEffect, useState } from 'react'
import './card.scss'
import { nanoid } from 'nanoid'
function App() {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  let [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      let url = `https://dummyjson.com/products`
      let res = await fetch(url)
      let data = await res.json()
      setProduct(data.products)
    }
    fetchData()
  }, [])
  console.log(product)
  return (
    <>
      {/* <h1>use Effect</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      {toggle ? <p>hello everyone</p> : <p>bye everyone</p>}

      <button onClick={() => setToggle(!toggle)}>toggle</button> */}
      <section className="main">
        {product.map((item) => {
const{title,thumbnail,price,description,stock}=item

          return (
            <div className="card">
              <img src={thumbnail} alt="" />
              <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                  <span>{price}</span>
                  <span>{stock}</span>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default App