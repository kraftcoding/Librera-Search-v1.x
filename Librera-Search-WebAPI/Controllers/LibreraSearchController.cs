using LibreraSearch.WebAPI.Context;
using LibreraSearch.WebAPI.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace LibreraSearch.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 
    public class LibreraSearchController : ControllerBase
    {
        private readonly LibreraSearchApiContext _context;

        public LibreraSearchController(LibreraSearchApiContext context)
        {
            _context = context;
        }

        [HttpGet]               
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]       
        public async Task<IEnumerable<Books>> Get()
        {
            return await _context.Books.ToListAsync<Books>();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Books books)
        {
            await _context.Books.AddAsync(books);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = books.id }, books);
        }

        [HttpGet("id")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ProducesResponseType(typeof(Books), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _context.Books.FindAsync(id);
            return user == null ? NotFound() : Ok(user);
        }

        [HttpGet("title")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ProducesResponseType(typeof(Books), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetByTitle(string title)
        {
            var bookList = await _context.Books.Where(a => a.Title.Contains(title)).ToListAsync();
            return bookList == null ? NotFound() : Ok(bookList);
        }              

        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Update(int id, Books book)
        {
            if (id != book.id) return BadRequest();
            _context.Entry(book).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            var userToDelete = await _context.Books.FindAsync(id);
            if (userToDelete == null) return NotFound();
            _context.Books.Remove(userToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
        [AcceptVerbs("DELETE")] //<-- To enable delete all
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteAll()
        {            
            _context.Books.RemoveRange(_context.Books); 
            await _context.SaveChangesAsync();
            return NoContent();
        }       
    }
}
