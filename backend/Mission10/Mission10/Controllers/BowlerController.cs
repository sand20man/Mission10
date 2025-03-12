using Microsoft.AspNetCore.Mvc;

namespace Mission10.Controllers;

public class BowlerController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}