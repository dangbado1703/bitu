import TimelineItemActive from "./TimelineItemActive";
import TimelineItemDone from "./TimelineItemDone";
import TimelineItemLock from "./TimelineItemLock";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <TimelineItemDone position="right" first="first" zIndex={10} />
      <TimelineItemDone position="left" first="not-first" zIndex={2} />
      <TimelineItemActive position="right" first="not-first" zIndex={10} />
      <TimelineItemLock position="left" first="not-first" zIndex={2} />
      <TimelineItemLock position="right" first="not-first" zIndex={10} />
      <TimelineItemLock position="left" first="not-first" zIndex={2} />
      <TimelineItemLock position="right" first="not-first" zIndex={10} />
    </div>
  );
};

export default Timeline;
