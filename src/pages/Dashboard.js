import { useAuth } from "../context/authContext";
import { testRequest } from "../services/authServices";

export default function Dashboard() {
  const { signout } = useAuth();

  const handleTestRequest = async () => {
    await testRequest();
  };

  return (
    <>
      <h1>Welcome to Dashboard!</h1>
      <button onClick={handleTestRequest}>Test Request</button>
      <button onClick={() => signout()}>Log out</button>
    </>
  );
}
