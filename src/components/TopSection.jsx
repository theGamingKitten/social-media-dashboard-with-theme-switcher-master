import './TopSection.css';

export default function TopSection() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
      }
      const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
      }
    
      const toggleTheme = (e) => {
        if (e.target.checked) {
          setLightMode();
        } else {
          setDarkMode();
        }
      }

    return (
        <div className="top-section">
            <div className="dashboard-title">
                <h1>Social Media Dashboard</h1>
                <h2>Total Followers: 23,004</h2>
            </div>
            <hr />
            <div className="dark-mode-toggle-container">
                <span className="dark-mode-span">Dark Mode</span> 
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme}/>
                    <span className="slider round"></span>
                </label>
            </div>            
        </div>
    );
}