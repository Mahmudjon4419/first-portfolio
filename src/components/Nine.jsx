import bgImg from '../assets/images/Rectangle 258.svg'
import bannerImg from '../assets/images/Ellipse 41.svg'


const Nine = () => {
    return (
        <div className="nineContainer" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="nineChild">
                <div className='nineInfo'>
                    <h1>Связаться с менеджером</h1>
                    <p>Менеджер проконсультирует по всем вопросам и подготовит коммерческое предложение</p>
                    <a href="#">Связаться с менеджером</a>
                </div>
                <div className='managerInfo'>
                        <img src={bannerImg} alt="" />
                    <div className='managerInfoChild'>
                        <h3>Наталья Сафронова</h3>
                        <span>Менеджер интернет-магазина</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nine