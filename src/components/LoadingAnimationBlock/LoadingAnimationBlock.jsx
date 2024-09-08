import styles from './LoadingAnimationBlock.module.css';

function LoadingAnimationBlock({...props}) {
    return <div className={styles.loadingBlock} {...props}>
        <span></span>
        <span></span>
        <span></span>
    </div>
}

export default LoadingAnimationBlock;