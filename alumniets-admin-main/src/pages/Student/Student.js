import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyTable from "../../components/MyTable/MyTable";
import "./Student.css"
const Student = () => {

  return (
    <div className="student-div">
      <Header />
      <MyTable />
      <Footer />
    </div>
  );
};
export default Student;
