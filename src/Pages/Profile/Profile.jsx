import './Profile.css'
import {   GamingLibrary, PopularClips, ProfileSection} from '../../sections';
import { SectionWrapper } from '../../components';
import ProfilesData from '../../Data/ProfilesData';

const Profile = () => {
  const profile_1 = ProfilesData[0];

  return (
    <>
        <SectionWrapper>
            <ProfileSection img={profile_1.img} status={profile_1.status} name={profile_1.name} bio={profile_1.bio} games={profile_1.games} friends={profile_1.friends} livestreams={profile_1.livestreams} clips={profile_1.clips} />
            <PopularClips />
        </SectionWrapper>
        <GamingLibrary title='Your Gaming Library'/>
    </>
  )
}

export default Profile