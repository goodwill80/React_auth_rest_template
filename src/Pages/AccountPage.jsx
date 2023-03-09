import { useSignInGlobalContext } from '../Context/SignInContext';

function AccountPage() {
  const { user } = useSignInGlobalContext();

  return (
    <div className="flex flex-col min-h-full h-[75vh] justify-center items-center">
      <h1 className="font-bold text-left text-2xl tracking-widest">
        Welcome back, {user?.displayName}!
      </h1>
      <div className="flex justify-center items-center space-x-14 border border-gray-100 h-[420px] w-[800px] mt-5 rounded-md shadow-xl">
        <div className="w-[220px] h-[220px] bg-green-300 rounded-full flex items-center justify-center mb-20">
          Your Photo
        </div>
        <div className="h-[330px] w-[350px] border border-gray-200 bg-green-50 p-8 px-8 rounded-lg">
          <div className="flex justify-between mb-4">
            <p className="font-bold">Name:</p>
            <p>{user?.displayName}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="font-bold">Email:</p>
            <p>{user?.email}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="font-bold">Member:</p>
            <p>Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
