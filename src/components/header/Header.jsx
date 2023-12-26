import styles from './Header.module.css';
import GGHeader from '../../../public/gg-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={GGHeader} />
            <h1>GuffawGram</h1>
        </header>
    )
}
 