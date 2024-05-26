import LayoutLession from "./LayoutLession";
import Fruits from "../assets/fruits.svg";

const TimelineItemLock = ({
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
        type="lock"
        first={first}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <img src={Fruits} alt="fruits" />
          </div>
          <div
            className="timeline-lession"
            style={{ marginBottom: 8, fontSize: 11 }}
          >
            Lession
            <span style={{ fontSize: 15, fontWeight: 600 }}>5</span>
          </div>
          <span className="timeline-content">
            Should same-sex marriages be legalized in Vietnam?
          </span>
        </div>
      </LayoutLession>
    </div>
  );
};
export default TimelineItemLock;
