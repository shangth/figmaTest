import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.fieldCount}>
      <div className={styles.formItem}>
        <div className={styles.labelItem}>
          <img src="../image/meutfeyj-f1w6a4m.svg" className={styles.a} />
          <p className={styles.title}>规则标题</p>
        </div>
        <div className={styles.input}>
          <div className={styles.content}>
            <p className={styles.placeholder}>Please enter</p>
          </div>
        </div>
      </div>
      <div className={styles.formItem2}>
        <div className={styles.labelItem2}>
          <img src="../image/meutfeyj-f1w6a4m.svg" className={styles.a} />
          <p className={styles.title}>规则内容</p>
          <img
            src="../image/meutfeyj-rl5g75r.svg"
            className={styles.tipsQuestionCircle}
          />
        </div>
        <div className={styles.textarea}>
          <p className={styles.placeholder2}>
            Please enter...
            <br />
          </p>
          <img src="https://via.placeholder.com/416x1" className={styles.resizer} />
        </div>
      </div>
    </div>
  );
}

export default Component;
