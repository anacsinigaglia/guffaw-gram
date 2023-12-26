import { Header } from './components/header/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/sidebar/Sidebar';
import { PostCard } from './components/post-card/PostCard';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <PostCard />
        </main>
      </div>
    </div>
  )
}

