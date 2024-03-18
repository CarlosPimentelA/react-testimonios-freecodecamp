import './TestimonioCard.css'

function TestimonioCard({img, name, country, job, text }) {
    return (
        <div className="testimonio-card">
            <div className="testimonio-img">
                <img src={img} alt="Foto" />
            </div>

            <div className="body-testimonio">

            <div className="testimonio-header">
                <p className="name-country"><strong>{name}</strong> in <strong>{country}</strong></p>
                <p className="job">Software Engineer at <strong>{job}</strong></p>
            </div>

            <div className="testimonio-text">
                <p>"{text}"</p>
            </div>

            </div>
        </div>
    )
}

export default TestimonioCard;