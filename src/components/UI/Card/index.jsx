import './style.css';
import cardImage from "./../../../assets/images/imag-1.png";

export default function Card(){
    return <div className="card">
        <img className="card-image" src={cardImage} alt="card-image" />

            <div className="card-title">
                <h4>Dijital Pazarlama</h4>

                <h2>Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?</h2>
                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>

                <button className="button_flex">Devamını Oku <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <g clip-path="url(#clip0_2412_1466)">
    <path d="M4 3L9 8L4 13" stroke="#165DF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 3L14 8L9 13" stroke="#165DF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_2412_1466">
      <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg></button>
            </div>
    </div>
}