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
                    id="1"
                    stats="Page Views" socialIcon={iconFacebook}
                    number="87" percentage="3" upDown="up"
                />
                <OverviewCard 
                    id="2"
                    stats="Likes" socialIcon={iconFacebook}
                    number="52" percentage="2" upDown="down"
                />
                <OverviewCard 
                    id="3"
                    stats="Likes" socialIcon={iconInstagram}
                    number="5462" percentage="2257" upDown="up"
                />
                <OverviewCard 
                    id="4"
                    stats="Profile Views" socialIcon={iconInstagram}
                    number="52k" percentage="1375" upDown="up"
                />

                <OverviewCard 
                    id="5"
                    stats="Retweets" socialIcon={iconTwitter}
                    number="117" percentage="303" upDown="up"
                />
                <OverviewCard 
                    id="6"
                    stats="Likes" socialIcon={iconTwitter}
                    number="507" percentage="553" upDown="up"
                />
                <OverviewCard 
                    id="7"
                    stats="Likes" socialIcon={iconYoutube}
                    number="107" percentage="19" upDown="down"
                />
                <OverviewCard 
                    id="8"
                    stats="Total Views" socialIcon={iconYoutube}
                    number="1407" percentage="12" upDown="down"
                />
            </div>
        </>
    );
}