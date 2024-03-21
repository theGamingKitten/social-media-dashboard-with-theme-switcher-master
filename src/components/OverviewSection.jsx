import OverviewCard from './OverviewCard';
import './OverviewSection.css';
import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconInstagram from '../assets/images/icon-instagram.svg';
import iconYoutube from '../assets/images/icon-youtube.svg';

export default function OverviewSection() {
    return (
        <>
            <h1 className="overview-title">Overview - Today</h1>
            <div className="overview-section">
            
                <OverviewCard 
                    stats="Page Views" socialIcon={iconFacebook}
                    number="87" percentage="3" upDown="up"
                />
                <OverviewCard 
                    stats="Likes" socialIcon={iconFacebook}
                    number="52" percentage="2" upDown="down"
                />
                <OverviewCard 
                    stats="Likes" socialIcon={iconInstagram}
                    number="5462" percentage="2257" upDown="up"
                />
                <OverviewCard 
                    stats="Profile Views" socialIcon={iconInstagram}
                    number="52k" percentage="1375" upDown="up"
                />

                <OverviewCard 
                    stats="Retweets" socialIcon={iconTwitter}
                    number="117" percentage="303" upDown="up"
                />
                <OverviewCard 
                    stats="Likes" socialIcon={iconTwitter}
                    number="507" percentage="553" upDown="up"
                />
                <OverviewCard 
                    stats="Likes" socialIcon={iconYoutube}
                    number="107" percentage="19" upDown="down"
                />
                <OverviewCard 
                    stats="Total Views" socialIcon={iconYoutube}
                    number="1407" percentage="12" upDown="down"
                />
            </div>
        </>
    );
}