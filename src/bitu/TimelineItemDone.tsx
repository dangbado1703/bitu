import LayoutLession from "./LayoutLession";
import Shapres from "../assets/shapes.svg";
import Serena from "../assets/serena.svg";

const TimelineItemDone = ({
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
        showFooter={true}
        position={position}
        type="done"
        first={first}
      >
        <div className="timeline-left">
          <div className="timeline-lession">
            <span>Lession 1</span>
          </div>
          <span className="timeline-content">
            Should same-sex marriages be legalized in Vietnam?
          </span>
          <div className="timeline-avatar">
            <div>
              <img src={Serena} alt="avatar" />
            </div>
            <span>Serena</span>
          </div>
        </div>
        <div className="timeline-right">
          <div>
            <img src={Shapres} alt="shapres" />
          </div>
        </div>
      </LayoutLession>
    </div>
  );
};

export default TimelineItemDone;
