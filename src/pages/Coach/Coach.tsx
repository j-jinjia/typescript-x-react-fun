import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getCoach } from "../../data/api";
import CoachData from "../../types/server/CoachData";
import { formatName } from "../../utils/nameUtils";

type CoachParams = {
  coachId: string;
};

// to see this page component action, run the app "/coaches/1" appended to the URL 🧐
const Coach: React.FC = () => {
  const { coachId } = useParams<CoachParams>();
  const [coach, setCoach] = useState<CoachData | null>();

  useEffect(() => {
    if (!coachId) return;
    (async () => {
      setCoach((await getCoach(parseInt(coachId))) ?? null);
    })();
  }, [coachId]);

  const coachTsx = useCallback(
    (coach: CoachData | null) =>
      coach ? (
        <>
          <p>Name : {formatName(coach?.firstName, coach?.lastName)}</p>
          <p>Coach Id : {coach?.id}</p>
        </>
      ) : (
        <span>Sorry, no coach found with id of {coachId}</span>
      ),
    [coachId]
  );

  return (
    <Layout navigation>
      <h1>Coach</h1>
      {coach !== undefined ? coachTsx(coach) : <span>Loading...</span>}
    </Layout>
  );
};

export default Coach;
