import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.aModal}>
      <div className={styles.header}>
        <p className={styles.text}>编辑规则</p>
        <img src="/image/meuthk1u-w955i6m.svg" className={styles.tipsClose} />
      </div>
      <div className={styles.fieldCount}>
        <div className={styles.formItem}>
          <div className={styles.labelItem}>
            <img src="/image/meuthk1u-38ws2n1.svg" className={styles.a} />
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
            <img src="/image/meuthk1u-38ws2n1.svg" className={styles.a} />
            <p className={styles.title}>规则内容</p>
            <img
              src="/image/meuthk1u-3uelg8u.svg"
              className={styles.tipsQuestionCircle}
            />
          </div>
          <div className={styles.textarea}>
            <p className={styles.placeholder2}>
              Please enter...
              <br />
            </p>
            <img
              src="https://via.placeholder.com/416x1"
              className={styles.resizer}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.button}>
          <p className={styles.title}>取消</p>
        </div>
        <div className={styles.button2}>
          <p className={styles.buttonText}>保存</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
