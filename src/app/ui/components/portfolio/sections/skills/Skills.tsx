import React from 'react';
import styles from './skills.module.css';

const Skills = () => {
  return (
    <section id='skills' className={`${styles.skills} portfolioSection`}>
      <div className={styles.title}>
        <h1>Skills</h1>
      </div>
      <h2>Skills & Attributes</h2>

      <h3 className={styles.skills_about}>Overall</h3>
      <li className={styles.skills_li}>기존의 개발 설계, 방법, 규칙등에 맞춰 개발합니다.</li>
      <li className={styles.skills_li}>항상 최신기술을 사용하기보다 더 적절하다고 생각되는 기술을 선택합니다.</li>
      <li className={styles.skills_li}>회사 업무 중 개발만이 나의 업무라고 생각하지 않습니다.</li>
      <h3 className={styles.skills_about}>Web</h3>
      <li className={styles.skills_li}>반응형 웹 제작 경험이 많습니다.</li>
      <li className={styles.skills_li}>모바일 브라우저에서의 트러블 슈팅 경험이 있습니다.</li>
      <h3 className={styles.skills_about}>JavaScript</h3>
      <li className={styles.skills_li}>JavaScript와 TypeScript에 능숙합니다.</li>
      <li className={styles.skills_li}>모듈 시스템(CommonJS, ES Modules)에 대해서 이해하고 사용합니다.</li>
      <li className={styles.skills_li}>NodeJS 개발 경험이 있습니다.</li>
      <h3 className={styles.skills_about}>React</h3>
      <li className={styles.skills_li}>React hooks를 사용하고 공통 비즈니스 로직을 모듈화하여 사용합니다.</li>
      <li className={styles.skills_li}>Testing Library를 사용하여 테스트코드를 작성할 수 있습니다.</li>
      <li className={styles.skills_li}>PureComponent, memo, lazy 등 성능 개선 경험이 있습니다.</li>
    </section>
  );
};

export default Skills;
