import { profilePicture } from '../sidebar/Sidebar';
import styles from './PostCard.module.css';

export function PostCard() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src={profilePicture} />

                    <div className={styles.authorInfo}>
                        <strong>Anokia Sinigaglia</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                 <time 
                    title="26 de Dezembro às 13:39"
                    dateTime='2022-12-26'
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not 
                    simply random text. It has roots in a piece of 
                    classical Latin literature from 45 BC, making it
                    over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, 
                    consectetur, from a Lorem Ipsum passage, and 
                    going through the cites of the word in classical 
                    literature, discovered the undoubtable source. 
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                     of &quot;de Finibus Bonorum et Malorum&quot; 
                     (The Extremes of Good and Evil) by Cicero, written 
                     in 45 BC. This book is a treatise on the theory of 
                     ethics, very popular during the Renaissance. The 
                     first line of Lorem Ipsum, &quot;Lorem ipsum dolor 
                     sit amet..&quot;, comes from a line in section 1.10.32.
                </p>
                <br />
                <a href=''>#history</a>{' '}
                <a href=''>#loremipsum</a>
            </div>
        </article>
    )
}