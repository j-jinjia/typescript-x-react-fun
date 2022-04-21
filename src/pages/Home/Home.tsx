import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";

// to see this page component action, run the app with nothing appended to the URL 🧐
export const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1>TypeScript x React Project</h1>
      <Button
        label="See Coaches"
        onClick={() => {
          navigate("/coaches");
        }}
      />
    </Layout>
  );
};

export default Home;
