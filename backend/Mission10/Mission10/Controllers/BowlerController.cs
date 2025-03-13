using Mission10.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private readonly BowlerDbContext _bowlerContext;

        public BowlerController(BowlerDbContext temp)
        {
            _bowlerContext = temp;
        }

        // ✅ Get all bowlers
        [HttpGet("bowlers")]
        public IEnumerable<Bowler> GetBowlers()
        {
            return _bowlerContext.Bowlers.ToList();
        }

        // ✅ Get all teams
        [HttpGet("teams")]
        public IEnumerable<Team> GetTeams()
        {
            return _bowlerContext.Teams.ToList();
        }
    }
}