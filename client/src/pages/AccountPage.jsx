import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  const { subpage } = useParams();

  function linkClasses(type) {
    let classes = "py-2 px-6";
    if (type === subpage || (subpage === undefined && type === "profile")) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link to={"/account"} className={linkClasses("profile")}>
          My Profile
        </Link>
        <Link to={"/account/bookings"} className={linkClasses("bookings")}>
          My Bookings
        </Link>
        <Link
          to={"/account/accomodations"}
          className={linkClasses("accomodations")}
        >
          My Accomodations
        </Link>
      </nav>
    </div>
  );
}
