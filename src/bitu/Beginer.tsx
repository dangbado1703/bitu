import "./index.scss";
import Back from "../assets/back.svg";
import ArrowRight from "../assets/arrow-right.svg";

const Beginer = () => {
  return (
    <div className="container__beginer">
      <div className="beginer-back">
        <div>
          <img src={Back} alt="back" />
        </div>
        <span>Beginer</span>
      </div>
      <div className="beginer-process">
        <div className="beginer-1">
          <span>Beginer 1</span>
        </div>
        <div className="process">
          <span>Mục tiêu học</span>
          <div className="dot">
            {Array.from({ length: 10 }, () => (
              <div className="dot-item" />
            ))}
          </div>
          <span>3/17</span>
          <div className="detail">
            <span>Chi tiết</span>
            <div>
              <img src={ArrowRight} alt="arrow right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beginer;
