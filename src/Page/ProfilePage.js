import ProfileProvider from "../Context/useProfileContext";
import { Profile } from "../Components/Profile/Profile";
import Layout from "../Components/Layout/Layout";

const ProfilePage = () => (
  <>
    <ProfileProvider>
      <Profile />
    </ProfileProvider>
  </>
);

export default Layout(ProfilePage);
