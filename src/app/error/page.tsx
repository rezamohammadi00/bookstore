import errorGenerator from "@/src/lib/errorGenerator";
import getRandomInt from "@/src/lib/getRandomInt";

//this page for test error.tsx
const ErrorPage = () => {
  if (getRandomInt(3) === 2) errorGenerator();
  return <div className="text-red-700">ErrorPage</div>;
};

export default ErrorPage;
