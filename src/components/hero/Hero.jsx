
import "./Hero.scss"
function Hero({ data }) {
    return (
        <div className="hero">
            <img src={data.image} alt="" />
            <div className="card">
                <h2>
                    {data.name}
                </h2>
                <p>🗺️{data.city}</p>
                <p>🗓️ {data.birthDate}</p>
                <p>
                    📧
                    <a href={"mailto:" + data.email}>
                        {data.email}
                    </a>
                </p>
                <p>📱 {data.phone}</p>
                <p>💾<a href={data.gitHub}>
                    GitHub
                </a></p>
            </div>
        </div>
    )
}

export default Hero