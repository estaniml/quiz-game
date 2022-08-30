import useDarkMode from '../hooks/useDarkMode'

const SwitchMode = () => {

  const [themeMode, setTheme] = useDarkMode()

  return (
    <label className="switch">
        <input type="checkbox" />
        <span
          onClick={() => setTheme(themeMode)}
          className="slider"
        ></span>
    </label>
  )
}

export default SwitchMode