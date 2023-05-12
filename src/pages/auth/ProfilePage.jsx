import UserProfile from "../../components/auth/UserProfile";

function ProfilePage() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center g-3">
          <UserProfile />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
