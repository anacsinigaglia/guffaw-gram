import { PencilSimpleLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

const sidebarCover = "https://images.unsplash.com/photo-1584846786080-99dbf89a744b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const profilePicture = "https://github.com/anacsinigaglia.png";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={sidebarCover} />

            <div className={styles.profile}>
                <img className={styles.avatar} src={profilePicture} alt=""/>
                <strong>
                    Anokia Sinigaglia
                </strong>
                <span>
                    Web Developer
                </span>
            </div>

            <footer>
                <a href='#'>
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}