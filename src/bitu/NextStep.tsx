import NextLock from "../assets/next-lock.svg";
import Baby from "../assets/baby.svg";
import Clound from "../assets/clound.svg";
import Clound2 from "../assets/clound2.svg";
import About from "../assets/about.svg";

const NextStep = () => {
  return (
    <div className="next-step__container">
      <div className="next-step__header">
        <div className="next-lock">
          <img src={NextLock} alt="next-lock" />
        </div>
        <div className="next">
          <span>Kế tiếp</span>
        </div>
      </div>
      <div className="next-step__body">
        <div className="body-clound">
          <div className="baby">
            <img src={Baby} alt="" />
          </div>
          <div className="clound">
            <img src={Clound} alt="" />
          </div>
          <div className="clound2">
            <img src={Clound2} alt="" />
          </div>
        </div>
        <div className="next-step__body-level">
          <div className="body-level">
            <span>Cấp độ 2: Elementary</span>
            <div>
              <img src={About} alt="about" />
            </div>
          </div>
          <div className="body-learn">
            <span>Tham gia bài kiểm tra để học vượt cấp</span>
            <div>
              <span>Học vượt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
