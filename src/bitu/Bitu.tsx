import BituLogo from "../assets/bitu-logo.svg";
import Calendar from "../assets/calendar.svg";
import Routime from "../assets/routime.svg";
import Serena from "../assets/serena.svg";
import Success from "../assets/success.svg";
import Clock from "../assets/clock.svg";
import ThreeDot from "../assets/threedot.svg";
import Beginer from "./Beginer";
import Timeline from "./Timeline";
import NextStep from "./NextStep";

const Bitu = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="bitu-logo">
          <img src={BituLogo} alt="bitu-logo" />
        </div>
      </div>
      <div className="body">
        <div className="calendar">
          <div className="title">
            <div>
              <img src={Calendar} alt="calendar" />
            </div>
            <span>Bạn đã đặt lịch tham gia 4 buổi học</span>
          </div>
          <div className="calendar__body">
            <div className="calendar__body-right">
              <div style={{ width: 64, height: 64, flexShrink: 0 }}>
                <img src={Routime} alt="routime" />
              </div>
              <div className="join-room">
                <span>Do you like street food do you like street food </span>
                <div>
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
                </div>
                <div className="right-footer">
                  <button>
                    <span>Vào học</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="calendar__body-left">
              <div className="item">
                <div>
                  <span className="lession">Buổi 2</span>
                  <div className="time">
                    <div>
                      <img src={Clock} alt="clock" />
                    </div>
                    <span>11:30, Thứ 5 tuần sau</span>
                  </div>
                  <div className="member-info">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={Serena} alt="avatar" />
                    </div>
                    <span className="name">Serena</span>
                    <div className="success">
                      <div style={{ flexShrink: 0 }}>
                        <img src={Success} alt="asuccess" />
                      </div>
                      <span>Đã xác nhận</span>
                    </div>
                  </div>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <img src={ThreeDot} alt="three-dot" />
                </div>
              </div>
              <div className="item">
                <div>
                  <span className="lession">Buổi 3</span>
                  <div className="time">
                    <div>
                      <img src={Clock} alt="clock" />
                    </div>
                    <span>11:30, Thứ 5 tuần sau</span>
                  </div>
                  <div className="member-info">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={Serena} alt="avatar" />
                    </div>
                    <span>Serena</span>
                    <div className="success">
                      <span>Chờ xác nhận</span>
                    </div>
                  </div>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <img src={ThreeDot} alt="three-dot" />
                </div>
              </div>
              <div className="item">
                <div>
                  <span className="lession">Buổi 4</span>
                  <div className="time">
                    <div>
                      <img src={Clock} alt="clock" />
                    </div>
                    <span>11:30, Thứ 5 tuần sau</span>
                  </div>
                  <div className="member-info">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={Serena} alt="avatar" />
                    </div>
                    <span>Serena</span>
                    <div className="success">
                      <span>Từ chối</span>
                    </div>
                  </div>
                </div>
                <div className="left-footer">
                  <button>
                    <span>Đặt lại</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Beginer />
        <Timeline />
        <NextStep />
      </div>
    </div>
  );
};

export default Bitu;
