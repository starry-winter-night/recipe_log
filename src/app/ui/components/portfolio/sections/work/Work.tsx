import React from 'react';
import styles from './work.module.css';
import Project from './Project';
import ToggleArrow from '../../../common/button/ToggleArrow';
import { portfolio, work } from '@/app/utils/constants/portfolio/work';

const Work = () => {
  return (
    <section id='work' className={`${styles.work} portfolioSection`}>
      <div className={styles.title}>
        <h1>My work</h1>
      </div>
      <p>이미지를 클릭하시면 해당하는 GitHub Page로 이동합니다.</p>
      <ToggleArrow title={'Portfolio(2021)'}>
        <div className={styles.projects}>
          <h2>Back-end</h2>
          {portfolio.map((item) => item.type === 'backend' && <Project key={item.id} project={item} />)}
          <h2>Front-end</h2>
          {portfolio.map((item) => item.type === 'frontend' && <Project key={item.id} project={item} />)}
        </div>
      </ToggleArrow>

      <ToggleArrow title={'Work Experience'} toggleDefault={true}>
        <div className={styles.container}>
          {work.map((item) => (
            <ul className={styles.list} key={item.id}>
              <div className={styles.company_container}>
                <h3 className={styles.company}>{item.company}</h3>
                <p className={styles.period}>{item.period}</p>
              </div>
              <div className={styles.info_container}>
                {item.works &&
                  item.works.map((work) => (
                    <li className={styles.info_list_container} key={work.id}>
                      <div className={styles.title_list_container}>
                        <h3>{work.title}</h3>
                        <p className={styles.period}>{work.period}</p>
                      </div>
                      <div className={styles.descript_title_container}>
                        <h4 className={styles.descript_title}>Descript</h4>
                        <p className={styles.descript}>{work.descript}</p>
                        <h4 className={styles.experience_title}>Work Experience</h4>
                        <ul className={styles.experience}>
                          {work.experience &&
                            work.experience.map((exp) => (
                              <li key={exp.id}>
                                <p>{exp.detail}</p>
                              </li>
                            ))}
                        </ul>
                        <h4 className={styles.tech_stack_title}>Tech Stack</h4>
                        <p className={styles.tech_stack}>{work.stack}</p>
                        {work?.link && (
                          <ul className={styles.link}>
                            <h4 className={styles.link_title}>Link</h4>
                            {work.link.map((link) => (
                              <li key={link.id}>
                                <a href={link.link} target='noopener'>
                                  {link.description}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
              </div>
            </ul>
          ))}
        </div>
      </ToggleArrow>
    </section>
  );
};

export default Work;
