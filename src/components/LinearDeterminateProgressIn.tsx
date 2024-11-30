import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./LinearDeterminateProgressIn.css";

export type LinearDeterminateProgressInType = {
  className?: string;

  /** Variant props */
  progress?: 0;

  /** Style props */
  linearDeterminateProgressInWidth?: CSSProperties["width"];
  linearDeterminateProgressInHeight?: CSSProperties["height"];
  linearDeterminateProgressInPadding?: CSSProperties["padding"];
  trackAndStopWidth?: CSSProperties["width"];
  trackWidth?: CSSProperties["width"];
  trackWidth1?: CSSProperties["width"];
  stopShapeBackgroundColor?: CSSProperties["backgroundColor"];
};

const LinearDeterminateProgressIn: FunctionComponent<
  LinearDeterminateProgressInType
> = ({
  className = "",
  progress = 0,
  linearDeterminateProgressInWidth,
  linearDeterminateProgressInHeight,
  linearDeterminateProgressInPadding,
  trackAndStopWidth,
  trackWidth,
  trackWidth1,
  stopShapeBackgroundColor,
}) => {
  const linearDeterminateProgressInStyle: CSSProperties = useMemo(() => {
    return {
      width: linearDeterminateProgressInWidth,
      height: linearDeterminateProgressInHeight,
      padding: linearDeterminateProgressInPadding,
    };
  }, [
    linearDeterminateProgressInWidth,
    linearDeterminateProgressInHeight,
    linearDeterminateProgressInPadding,
  ]);

  const trackAndStopStyle: CSSProperties = useMemo(() => {
    return {
      width: trackAndStopWidth,
    };
  }, [trackAndStopWidth]);

  const trackStyle: CSSProperties = useMemo(() => {
    return {
      width: trackWidth,
    };
  }, [trackWidth]);

  const track1Style: CSSProperties = useMemo(() => {
    return {
      width: trackWidth1,
    };
  }, [trackWidth1]);

  const stopShapeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: stopShapeBackgroundColor,
    };
  }, [stopShapeBackgroundColor]);

  return (
    <div
      className={`linear-determinate-progress-in ${className}`}
      data-progress={progress}
      style={linearDeterminateProgressInStyle}
    >
      <div className="track-and-stop" style={trackAndStopStyle}>
        <div className="track1" style={trackStyle}>
          <div className="track" style={track1Style} />
          <div className="stop">
            <div className="stop-shape" style={stopShapeStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearDeterminateProgressIn;
