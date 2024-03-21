import './OverviewCard.css';

export default function OverviewCard(props) {
    return (
        <div className="overview-card">
        <span className="stats-span">{props.stats}</span>
        <span className="icon-span"><img src={props.socialIcon} alt={props.socialIcon}/></span>
        <span className="number-span">{props.number}</span>
        <span className={`percentage-span ${props.upDown}`}>{props.percentage}%</span>
        </div>       
    )
}