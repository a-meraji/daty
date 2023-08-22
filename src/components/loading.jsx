import styles from "@/styles/loading.module.css";

export default function Loading() {
  return (
    <div
    style={{ display:"block"}}
      className={styles.loading}
    >
        <div>

      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon
          strokeWidth="1"
          stroke="#fff"
          fill="none"
          points="20,1 40,40 1,40"
          ></polygon>
      </svg>
          </div>
    </div>
  );
}