const products = [
    { h1: 15, title: "лет", span: "успешной работы" },
    { h1: 300, title: "человек", span: "работает в компании" },
    { h1: 876, title: "товаров", span: "продается ежедневно" },
    { h1: 150, title: "новинок", span: "поступает ежедневно" }
]

const Eight = () => {
    return (
        <div className="eightContainer">
            <h1>Мы в цифрах</h1>
            <div className="boxContainer">
                {products.map((product, index) => (
                    <div className="boxChild">
                        <h1>{product.h1}<span>{product.title}</span> </h1>
                        <span>{product.span}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Eight