import { GrayBlock } from "Components/GrayBlock/GrayBlock"
import styles from "./ProfilePanel.module.scss"

export const ProfilePanel = props => {
    return (
        <div className={styles.profilePanel}>
            <div className={styles.profileInfo}>
                <GrayBlock>
                </GrayBlock>
            </div>
            <div className={styles.friends}>
                <GrayBlock>
                </GrayBlock>
            </div>
        </div>
    )
}