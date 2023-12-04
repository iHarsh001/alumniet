import "./NewsCard.css";
const NewsCard = (props) => {
  return (
    <div class="blog_post">
      <div class="container_copy">
        <h3>{props.item.date}</h3>
        <h1>{props.item.author}</h1>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};
export default NewsCard;
