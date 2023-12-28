import { Header } from "./components/header/Header";
import "./global.css";
import styles from "./App.module.css";
import { PostCard } from "./components/post-card/PostCard";
import { Sidebar } from "./components/sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/anacsinigaglia.png",
      name: "Anokia Sinigaglia",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,  looked up one of the more obscure Latin words,  consectetur, from a Lorem Ipsum passage, and  going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
      },
      {
        type: "link",
        text: "#history",
      },
      {
        type: "link",
        text: "#loremipsum",
      },
    ],
    publishedAt: new Date("2023-12-26 20:00:00"),
  },
];
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
