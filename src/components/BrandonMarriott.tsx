import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./BrandonMarriott.css";

export type BrandonMarriottType = {
  className?: string;

  /** Style props */
  brandonMarriottMargin?: CSSProperties["margin"];
  brandonMarriottFontWeight?: CSSProperties["fontWeight"];
  brandonMarriottHeight?: CSSProperties["height"];
  brandonMarriottWidth?: CSSProperties["width"];
  brandonMarriottPadding?: CSSProperties["padding"];
  brandonMarriottHeight1?: CSSProperties["height"];
  brandonMarriottWidth1?: CSSProperties["width"];
  brandonMarriottFontSize?: CSSProperties["fontSize"];

  /** Action props */
  onBrandonMarriottContainerClick?: () => void;
};

const BrandonMarriott: FunctionComponent<BrandonMarriottType> = ({
  className = "",
  onBrandonMarriottContainerClick,
  brandonMarriottMargin,
  brandonMarriottFontWeight,
  brandonMarriottHeight,
  brandonMarriottWidth,
  brandonMarriottPadding,
  brandonMarriottHeight1,
  brandonMarriottWidth1,
  brandonMarriottFontSize,
}) => {
  const brandonMarriottStyle: CSSProperties = useMemo(() => {
    return {
      margin: brandonMarriottMargin,
      fontWeight: brandonMarriottFontWeight,
      height: brandonMarriottHeight1,
      width: brandonMarriottWidth1,
      fontSize: brandonMarriottFontSize,
    };
  }, [
    brandonMarriottMargin,
    brandonMarriottFontWeight,
    brandonMarriottHeight1,
    brandonMarriottWidth1,
    brandonMarriottFontSize,
  ]);

  const brandonMarriott1Style: CSSProperties = useMemo(() => {
    return {
      height: brandonMarriottHeight,
      width: brandonMarriottWidth,
      padding: brandonMarriottPadding,
    };
  }, [brandonMarriottHeight, brandonMarriottWidth, brandonMarriottPadding]);

  return (
    <div
      className={`brandon-marriott ${className}`}
      onClick={onBrandonMarriottContainerClick}
      style={brandonMarriott1Style}
    >
      <h3 className="brandon-marriott1" style={brandonMarriottStyle}>
        Brandon Marriott
      </h3>
    </div>
  );
};

export default BrandonMarriott;
