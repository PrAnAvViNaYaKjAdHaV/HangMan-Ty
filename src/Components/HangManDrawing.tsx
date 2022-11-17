const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);
const BOADY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      background: "black",
      top: "120px",
      right: "0",
    }}
  ></div>
);
const Right_Arm = (
  <div
    style={{
      width: "100px",
      height: "11px",
      position: "absolute",
      background: "black",
      top: "120px",
      right: "-99px",
      transform: "rotate(-10deg)",
    }}
  ></div>
);

const Right_Leg = (
  <div
    style={{
      width: "100px",
      height: "11px",
      position: "absolute",
      background: "black",
      top: "240px",
      right: "-85px",
      transform: "rotate(40deg)",
    }}
  ></div>
);

const Left_Arm = (
  <div
    style={{
      width: "100px",
      height: "11px",
      position: "absolute",
      background: "black",
      top: "120px",
      right: "0",
      transform: "rotate(11deg)",
    }}
  ></div>
);
const Left_Leg = (
  <div
    style={{
      width: "100px",
      height: "11px",
      position: "absolute",
      background: "black",
      top: "240px",
      right: "-4px",
      transform: "rotate(-40deg)",
    }}
  ></div>
);
export function HangManDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BOADY}
      {Right_Arm}
      {Left_Arm}
      {Right_Leg}
      {Left_Leg}
      <div
        style={{
          height: "50px",
          width: "10px",
          border: "10px sollid black",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
}
