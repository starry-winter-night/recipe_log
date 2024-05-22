import React from 'react';
import styles from './menu.module.css';
import { MenuProps } from '@/types/components/portfolio/menu';

const Menu = ({ title }: MenuProps) => {
  return <li className={styles.list}>{title}</li>;
};

export default Menu;
