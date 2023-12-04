import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NewsCard from "../../components/NewsCard/NewsCard";
const AllPost = () => {
  const data = [
    {
      date: "10 October 2020",
      author: "Jatin",
      description: "Hi hello",
    },
    {
      date: "10 October 2020",
      author: "Jatin",
      description: "Hi hello",
    },
    {
      date: "10 October 2020",
      author: "POLU",
      description: "Hi hello",
    },
    {
      date: "10 October 2020",
      author: "Harsh",
      description: "Hi hello",
    },
    {
      date: "10 October 2020",
      author: "LOLO",
      description: "Hi hello",
    },
  ];
  return (
    <div>
      <Header />
      <div className="newscard-div">
        {data.map((item) => {
          return <NewsCard item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
export default AllPost;
