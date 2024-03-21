import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconInstagram from '../assets/images/icon-instagram.svg';
import iconYoutube from '../assets/images/icon-youtube.svg';
import './DashboardSection.css';
import DashboardCard from './DashboardCard';

export default function SocialSection() {
    return (
        <div className="dashboard-container">
        <DashboardCard
          id="1"
          socialSite="facebook"
          imgSrc={iconFacebook}
          userName="nathanf"
          followerCount="1987"
          followersToday="12"
          upDown="up"
        />
        <DashboardCard
          id="2"
          socialSite="twitter"
          imgSrc={iconTwitter}
          userName="nathanf"
          followerCount="1044"
          followersToday="99"
          upDown="up"
        />
        <DashboardCard
          id="3"
          socialSite="instagram"
          imgSrc={iconInstagram}
          userName="realnathanf"
          followerCount="11k"
          followersToday="1099"
          upDown="up"
        />
        <DashboardCard
          id="4"
          socialSite="youtube"
          imgSrc={iconYoutube}
          userName="Nathan F."
          followerCount="8239"
          followersToday="144"
          upDown="down"
        />
      </div>
    );
}

/*
Middle Part 4x DashboardCard
*/