// src/components/Header.tsx
import './Header.css';
function Header() {
    const name:string = "New name"
    const date = new Date() 
    const newDate = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
  return (
    <header className="header">
      <div className="welcome-message">
        <h1>Welcome back, {name} 👋</h1>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search your task here..." className="search-bar" />
        <span className="date">{newDate}/{month}/{year}</span>
        <button className="invite-btn">new task</button>
      </div>
    </header>
  );
};

export default Header;