import { auth } from "@/src/lib/auth";

const DashboardPage = async () => {
  const session = await auth(); // {user: {name: "reza"}, expires: '2025-03-05T19:13:10.907Z'}  //  value user key is return authorize function of auth.ts that removed token
  //const session = await auth(); // if the user is not authenticated , await auth() returns null
  console.log(session);
  return <main className="w-full min-h-screen bg-base-200"></main>;
};

export default DashboardPage;
