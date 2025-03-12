using Microsoft.AspNetCore.Mvc;

namespace Mission10.Data;

public class BowlerDbContext : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}