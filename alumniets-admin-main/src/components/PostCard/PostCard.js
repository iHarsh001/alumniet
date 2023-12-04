import {
  Button,
  TextField,
  Typography,
  CardActionArea,
  Card,
  CardContent,
} from "@mui/material";
import "./PostCard.css";
const PostCard = () => {
  return (
    <Card className="postcard-div" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ADD NEWS
          </Typography>
          <TextField
            id="outlined-multiline-static"
            label="NEWS"
            multiline
            rows={3}
          />
        </CardContent>
      </CardActionArea>
      <div className="post-button">
        <Button variant="contained">Post</Button>
      </div>
    </Card>
  );
};
export default PostCard;
