
import SortFilter from "@components/Filters/SortFilter"
import Pagination from "@components/Pagination"
import UserCard from "@components/UserCard"
import { fetchUsers } from "@lib/actions/user.actions"


const CommunityPage = async ({
  searchParams
}: { searchParams: { [key: string]: string | undefined} }) => {

  const result = await fetchUsers(
    searchParams.page ? +searchParams.page : 1, 20,
    searchParams.sortby ? searchParams.sortby : 'newest'
  )

  return (
    <>
    <h1>Community</h1>

    <SortFilter />

    <div className="user-card-group">


      { result.users.length === 0 ? (
        <p>No users found</p>
      ) : (
          result.users.map((user) => (
            <UserCard 
              key={user._id}
              id={user._id}
              fullName={user.fullname}
              image={user.image}
              created_at={user.created_at}
              recipes={user.recipes}
              friends={user.friends}
              comments={user.comments}
            />
          ))
      )}

    </div>

    <Pagination
      path='community'
      pageNumber={searchParams?.page ? +searchParams.page : 1}
      isNext={result.isNext}
    />

    </>
  )
}

export default CommunityPage