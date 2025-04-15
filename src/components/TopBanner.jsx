import myimg from "../images/E.png";

const TopBanner = () => {
  return (
    <div id="myimg" style={{ marginTop: "20px" }}>
      <img
        src={myimg}
        alt="Employee Banner"
        style={{ height: "450px", width: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default TopBanner;

