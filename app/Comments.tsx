import EditableComments from "./EditableComments";
import { commentsContent } from "./commentsContent";

const commentsFetch = () =>
  new Promise((resolve) => setTimeout(() => resolve(commentsContent()), 2000));

async function Comments() {
  const comments = (await commentsFetch()) as string[];

  return <EditableComments comments={comments} />;
}

export default Comments;
