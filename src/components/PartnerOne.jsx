const partners = [
  { file: "mastercard.png", name: "Mastercard Foundation" },
  { file: "social-initiative.png", name: "Social Initiative" },
  { file: "echidna.png", name: "Echidna Giving" },
];

const PartnerOne = () => {
  return (
    <div className='partner'>
      <div className='container'>
        <div
          className='row justify-content-center align-items-center gutter-30'
          style={{ flexWrap: "wrap" }}
        >
          {partners.map((partner, index) => (
            <div className='col-auto' key={index}>
              <div className='partner__slider-single'>
                <img
                  src={`/assets/images/sponsor/${partner.file}`}
                  alt={partner.name}
                  title={partner.name}
                  style={{ height: "110px", width: "auto", maxWidth: "260px", objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerOne;
