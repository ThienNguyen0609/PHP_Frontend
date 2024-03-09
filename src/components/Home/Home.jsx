import Card from '../Card/Card'
import Product from '../Product/Product'
import './Home.scss'

const Home = () => {
    return (
        <>
            <div className='home-wrapper'>
                <Product />
                <Card />
            </div>
        </>
    )
}

export default Home