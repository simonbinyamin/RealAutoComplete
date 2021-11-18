## Real C# auto complete

Real Csharp auto complete will autocomplete your Csharp project with .NET properties and attributes here is a list of the snippets

### Command list

```
ApiController -> [ApiController] }
RouteController -> Route(api/[controller]) }
RouteParam -> Route(GetCompany/{id}) }
Route -> Route(Create) }
Validate -> [ValidateAntiForgeryToken] }
Post -> [HttpPost] }
Fromform -> [FromForm]Company command }
Auth -> [Authorize] }
HttpPut -> HttpPut({id}) }
HttpDelete -> HttpDelete({id}) }
Primary -> [Key]
[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
public int Id { get; set; } }
FromBody -> [FromBody] UserModel user }
LinqAny -> var Exist = (from ur in _context.Users where ur.EmailAddress==user.EmailAddress select ur).Any(); }
LinqFirstOr -> UserModel user = (from u in _context.Users where u.UserName == login.UserName select u).FirstOrDefault(); }


varchar -> [Column(TypeName = VARCHAR)]
           [StringLength(15)]
           public string name { get; set; } }

date -> [Column(TypeName = DATE)]
        public DateTime date { get; set; } }

bit -> [Column(TypeName = BIT)]
       public bool iswork { get; set; } }

numeric -> [Column(TypeName = NUMERIC(182))]
           public decimal num { get; set; } }

decimal -> [Column(TypeName = DECIMAL(54))]
            public decimal num { get; set; } }

time -> [Column(TypeName = TIME(0))]
        public TimeSpan time { get; set; } }


smalldatetime -> [Column(TypeName = SMALLDATETIME)]
                 public DateTime date { get; set; }

nchar ->  [Column(TypeName = NCHAR)]
          public string chr { get; set; }

primaryNoIncrement -> [Key DatabaseGenerated(DatabaseGeneratedOption.None)]
                       public int Id { get; set; }
```

### How to start

ctrl+shift+p and choose 'real-csharp-autocomplete'
do this each time you open a .NET project


### Real visual studio

Download Real visual studio theme to get a better experience 

### Developer

* `Simon Bonyamin`
* `simon.m.binyamin@gmail.com`
