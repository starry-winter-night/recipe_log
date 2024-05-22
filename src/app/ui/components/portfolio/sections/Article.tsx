import React from 'react';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';
import Work from './work/Work';
import Contact from './contact/Contact';
import styles from './article.module.css';

const Article = () => {
  return (
    <article className={styles.article}>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </article>
  );
};

export default Article;
