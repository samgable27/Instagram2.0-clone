import React from "react";
import { Post } from "./Post";

const posts = [
  {
    id: "123",
    username: "samgable",
    userImg:
      "https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/22489719_10155791768243236_2244555154093275026_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_VjNAwh3Bw8AX_vcVOp&_nc_ht=scontent-lga3-2.xx&oh=00_AfBmnNYW0kclv5GyZipZ76fhH_t505W4okGV7cbbIJ73WQ&oe=63EA9511",
    img: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/22489719_10155791768243236_2244555154093275026_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_VjNAwh3Bw8AX_vcVOp&_nc_ht=scontent-lga3-2.xx&oh=00_AfBmnNYW0kclv5GyZipZ76fhH_t505W4okGV7cbbIJ73WQ&oe=63EA9511",
    caption: "Yoooo",
  },
  {
    id: "123",
    username: "fullthrottledub",
    userImg:
      "https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/22489719_10155791768243236_2244555154093275026_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_VjNAwh3Bw8AX_vcVOp&_nc_ht=scontent-lga3-2.xx&oh=00_AfBmnNYW0kclv5GyZipZ76fhH_t505W4okGV7cbbIJ73WQ&oe=63EA9511",
    img: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/22489719_10155791768243236_2244555154093275026_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_VjNAwh3Bw8AX_vcVOp&_nc_ht=scontent-lga3-2.xx&oh=00_AfBmnNYW0kclv5GyZipZ76fhH_t505W4okGV7cbbIJ73WQ&oe=63EA9511",
    caption: "new pics what's up?",
  },
];

export const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};
