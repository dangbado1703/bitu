import { ReactNode } from "react";
import "./index.scss";
import Success from "../assets/success.svg";
import Lock from "../assets/lock.svg";

const LayoutLession = ({
  showFooter,
  children,
  position,
  type,
  first,
}: {
  showFooter: boolean;
  children: ReactNode;
  position: "right" | "left";
  type: "done" | "active" | "lock";
  first: "first" | "not-first";
}) => {
  return (
    <div className={`lession-container ${position} ${type} ${first}`}>
      <div className={`icon ${position} ${first} ${type}`}>
        <div>
          {type === "done" ? (
            <img
              src={Success}
              alt="success"
              style={{ width: "100%", height: "100%" }}
            />
          ) : null}
          {type === "active" ? <div className={type} /> : null}
          {type === "lock" ? (
            <img
              src={Lock}
              alt="lock"
              style={{ width: "100%", height: "100%" }}
            />
          ) : null}
        </div>
      </div>
      <div className={`lession-container__body ${position} ${type}`}>
        <div className="lession-body">{children}</div>
        {showFooter ? (
          <div className="lession-footer">
            <span>Làm bài tập</span>
            <span>Tài liệu</span>
            <span>Học lại</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LayoutLession;
