import { Fragment, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getCoaches } from "../../data/api";
import CoachData from "../../types/server/CoachData";
import { formatName } from "../../utils/nameUtils";

// to see this page component action, run the app "/coaches" appended to the URL 🧐
const Coaches = () => {
  const [coaches, setCoaches] = useState<CoachData[] | null>();

  useEffect(() => {
    (async () => {
      setCoaches((await getCoaches()) ?? null);
    })();
  }, []);

  const coachesTsx = (coaches: CoachData[] | null) => {
    return coaches && coaches.length > 0 ? (
      coaches.map((coach) => (
        <Fragment key={coach.id}>
          <h2>{formatName(coach.firstName, coach.lastName)}</h2>
          <p>Coach Id: {coach.id}</p>
        </Fragment>
      ))
    ) : (
      <span>Sorry, no coaches found</span>
    );
  };

  return (
    <Layout navigation>
      <h1>Coaches</h1>
      {coaches !== undefined ? coachesTsx(coaches) : <span>Loading...</span>}
    </Layout>
  );
};

export default Coaches;
