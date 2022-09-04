import classes from "./BlogPost.module.css";
import {useHistory} from "react-router-dom";

const BlogPost = ({slug, image, title, duration}) => {

    const history = useHistory();

    return (
        <div className={classes.Post} onClick={() => history.push(`/blog/${slug}`)}>
            <img src={image} />
            <div className={classes.PostContent}>
                <div className={classes.PostTitle}>
                    {title}
                </div>
                <div>
                    {duration}
                </div>
            </div>
        </div>
    )
}

export default BlogPost;
