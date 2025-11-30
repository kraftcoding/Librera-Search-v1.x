using LibreraSearch.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace Authentication.WebAPI.Controllers
{
    [Route("api/login")]
    public class LoginController : Controller
    {
        private readonly LibreraSearchApiContext _context;
        public LoginController(LibreraSearchApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModel model)
        {
            // Validate user credentials
            Login login = IsValidLogin(model);

            if (login != null)
            {
                // Create claims for user roles
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, login.Email),
                    new Claim(ClaimTypes.Role, login.Role)
                };

                // Create JWT token using claims and secret key
                var token = new JwtSecurityToken(
                    issuer: "Librera.Search.WebAPI",
                    audience: "Librera.Search.Users",
                    claims: claims,
                    expires: DateTime.UtcNow.AddMinutes(30), // Set expiry time
                    signingCredentials: new SigningCredentials(
                        new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ThisIsTheMostSecretStringEver123456789%")),
                        SecurityAlgorithms.HmacSha256
                    )
                );

                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
            }

            return Unauthorized();
        }

        internal Login IsValidLogin(LoginModel model)
        {
            var login = _context.Login.Where(a => a.Email.Contains(model.Email) &&
                                                         a.Password.Contains(model.Password)).FirstOrDefault();
            return login == null ? null : login;
        }

        public class LoginModel
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public string Role { get; set; }
        }
    }
}
