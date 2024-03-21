import './DashboardCard.css';

export default function DashboardCard(props) {
    return (
        <div className={`dashboard-card ${props.socialSite}`}>
            <span className="username-span"><img src={props.imgSrc} alt={props.userName}/>
            @{props.userName}</span>
            <span className="follower-count">{props.followerCount}</span>
            <span className="follower-span">F O L L O W E R S</span>
            <span className={`today-span ${props.upDown}`}>{props.followersToday} Today</span>
        </div>
    );
}