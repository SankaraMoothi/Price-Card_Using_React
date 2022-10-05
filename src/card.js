function Card(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.cardDetails.title}
            </h5>
            <h6 className="card-price text-center">
              {props.cardDetails.price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              {props.cardDetails.userBold === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  <strong>{props.cardDetails.user}</strong>
                </li>
              ) : (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.cardDetails.user}
                </li>
              )}
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.cardDetails.data}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.cardDetails.project}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.cardDetails.access}
              </li>
              {props.cardDetails.project1test === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.cardDetails.project1}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.cardDetails.project1}
                </li>
              )}

              {props.cardDetails.PhoneSupporttest === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.cardDetails.PhoneSupport}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.cardDetails.PhoneSupport}
                </li>
              )}
              {props.cardDetails.domaintest === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.cardDetails.domain}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.cardDetails.domain}
                </li>
              )}
              {props.cardDetails.statustest === true ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {props.cardDetails.status}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {props.cardDetails.status}
                </li>
              )}
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
