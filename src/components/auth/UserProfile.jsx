import { useSelector } from "react-redux";

function UserProfile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="col-12">
      <div class="card shadow-sm mb-3">
        <div className="card-header">
          <h2>👋 Hey there</h2>
        </div>
        <div class="card-body">
          <h5 class="card-title">I am {user?.user} 😎</h5>
          <strong>Bio:</strong>
          <p class="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            dolorem a enim eaque, odit iure repellendus ducimus architecto
            quaerat vero impedit maiores esse quia, ea saepe placeat, molestias
            facilis molestiae!
          </p>
          {user?.email ? (
            <p class="card-text">
              <small class="text-body-secondary">
                This is my email: {user?.email}
              </small>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
