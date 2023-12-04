import { Button } from "@mui/material";
import nietLogo from "../../images/nietLogo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleImg = () => {
    navigate("/dashboard");
  };
  const handleAddPost = () => {
    navigate("/addpost");
  };
  const handleAllPost = () => {
    navigate("/allpost");
  };
  const handleAlumni = () => {
    navigate("/alumni");
  };
  const handleStudent = () => {
    navigate("/student");
  };
  const handleMyPost = () => {
    navigate("/mypost");
  };
  return (
    <div className="header-div">
      <nav>
        <div className="navbar-image-p">
          <img
            onClick={handleImg}
            className="content-items"
            src={nietLogo}
            alt="NIET LOGO"
          ></img>
          <p onClick={handleImg} className="logo">
            {" "}
            Alumniets
          </p>

          <ul>
            <li>
              <Button
                onClick={handleAddPost}
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Add Post
              </Button>
            </li>
            <li>
              <Button
                onClick={handleMyPost}
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                My Post
              </Button>
            </li>
            <li>
              <Button
                onClick={handleAllPost}
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                All Post
              </Button>
            </li>
            <li>
              <Button
                onClick={handleAlumni}
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Alumni
              </Button>
            </li>
            <li>
              <Button
                onClick={handleStudent}
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Students
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
