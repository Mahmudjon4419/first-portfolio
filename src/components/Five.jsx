import backgroundImage from '../assets/images/slider-img-1 1.svg'

const Five = () => {
    return (
        <div className="fiveContainer" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="fiveTitle">
                <h1>Финальная распродажа осени</h1>
                <a href="#">Узнать подробнее</a>
            </div>
        </div>
    )
}

export default Five