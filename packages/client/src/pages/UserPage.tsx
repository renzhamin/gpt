import { Card } from "@/components/ui/card";
import CommentSection from "@/components/ui/comment-section";
import Nicknames from "@/components/ui/nicknames";
import UserDetails from "@/components/ui/user-details";

function UserPage() {
  const id = window.location.pathname.split("/").at(-1);

  return (
    <>
      <div>
        <Card>
          <div className="flex justify-between">
            <UserDetails id={id} />
            <Nicknames id={id} />
          </div>
          <CommentSection id={id} />
        </Card>
      </div>
    </>
  );
}

export default UserPage;
