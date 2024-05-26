import LayoutLession from "./LayoutLession";
import Serena from "../assets/serena.svg";
import Success from "../assets/success.svg";
import Clock from "../assets/clock.svg";
import Started from "../assets/started.svg";
import Outline from "../assets/outline.svg";

const TimelineItemActive = ({
  position,
  first,
  zIndex,
}: {
  position: "right" | "left";
  first: "first" | "not-first";
  zIndex: number;
}) => {
  return (
    <div className={`timeline ${position} ${first}`} style={{ zIndex }}>
      <LayoutLession
        showFooter={false}
        position={position}
        type="active"
        first={first}
      >
        <div>
          <div className="timeline-lession">
            <span>Lession 3</span>
          </div>
          <div className="member-info">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Serena} alt="avatar" />
            </div>
            <span>Serena</span>
            <div className="success">
              <div style={{ flexShrink: 0 }}>
                <img src={Success} alt="asuccess" />
              </div>
              <span>Đã xác nhận</span>
            </div>
          </div>
          <div className="time">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Clock} alt="Clock" />
            </div>
            <span>11:30, Thứ 5</span>
          </div>
          <div className="active-footer">
            <div className="routime">
              <img src={Started} alt="started" />
            </div>
            <div>
              <span className="content">
                Do you think that people who fight for animal rights while
                eating?
              </span>
              <div className="footer">
                <div>
                  <div>
                    <img src={Outline} alt="" />
                  </div>
                  <span>Outline</span>
                </div>
                <button>
                  <span>Vào học</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutLession>
    </div>
  );
};

export default TimelineItemActive;
