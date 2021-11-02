import React, { useEffect, useState } from 'react'
import { getStorage, setStorage } from '../helpers'
import { KEY_THEME } from '../helpers/const'

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useState(()=> {
    return getStorage(KEY_THEME)
  });

  const toggleTheme = ()=> {
    setDarkTheme(prevTheme=> !prevTheme);
    setStorage(KEY_THEME, !darkTheme)
  } 
  
  // function changeMedia(mq) {
  //   setDarkTheme(mq.matches);
  // }
  
  // useEffect(() => {
  //   const mq = window.matchMedia('(prefers-color-scheme: dark)');
  //   mq.addEventListener('change', changeMedia);
  //   setDarkTheme(mq.matches);

  //   return () => {
  //     mq.removeEventListener('change', changeMedia);
  //   }
  // }, [])

  useEffect(()=> {
    const currentTheme = darkTheme ? 'dark-theme' : 'light-theme';
    document.documentElement.setAttribute('theme', currentTheme);
  }, [darkTheme])

  const styles = { backgroundColor: darkTheme ? '#e4e4e4' : '#232425' }

  return (
    <button onClick={toggleTheme} className='toggle-theme cursor--pointer' style={styles}>
      {darkTheme ? '🌞' : '🌕'}
    </button>
  )
}

export default ToggleTheme
