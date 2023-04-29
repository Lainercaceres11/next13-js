import styles from './character-information.module.css'

interface Props {
  children: React.ReactNode;
}

function CardLayout({ children }: Props) {
  return <div className={styles.characterLayout}>{children}</div>;
}

export default CardLayout;
