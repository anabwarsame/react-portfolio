export const Header = () => {
  return (
    <header
      className="py-5 bg-image-full d-flex flex-wrap justify-content-center"
      className="image-container"
      style={{ width: "18rem", margin: "auto" }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/portfolioprofile.JPG`}
        className="card-img-top"
        alt="placeholder img"
      />

      <div className="text-center my-5">
        <h1 className="name">ANAB WARSAME</h1>
        <h6 className="name">FULL STACK WEB DEVELOPER</h6>
      </div>
      <div></div>
    </header>
  );
};
