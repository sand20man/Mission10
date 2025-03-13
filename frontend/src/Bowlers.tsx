import { useEffect, useState } from 'react';
import { bowler } from './types/bowlers';
import { team } from './types/teams';

function Bowlers() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);
  const [teams, setTeams] = useState<team[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://localhost:5000/Bowler/bowlers');
      const bowlerData = await response.json();
      const teamRes = await fetch('https://localhost:5000/Bowler/teams');
      const teamData = await teamRes.json();
      setBowlers(bowlerData);
      setTeams(teamData);
    };
    fetchData();
  }, []);

  const getTeamName = (teamId: number) => {
    const team = teams.find((t) => t.teamId === teamId);
    return team ? team.teamName : 'No Team';
  };

  const filteredBowlers = bowlers.filter(b => {
    const teamName = getTeamName(b.teamId);
    return teamName === "Marlins" || teamName === "Sharks";
  });

  return (
    <div className="container mt-4">

      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered rounded shadow">
          <thead className="table-dark text-center">
            <tr>
              <th>Bowler Name</th>
              <th>Team Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredBowlers.map((b) => (
              <tr key={b.bowlerId}>
                <td>{b.bowlerFirstName} {b.bowlerMiddleInit || ''} {b.bowlerLastName}</td>
                <td>{getTeamName(b.teamId)}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bowlers;
