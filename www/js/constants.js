angular.module('issApp')

.constant('API_ENDPOINT',{
  url : 'http://localhost:6543/tff_api/v1.0'
})

.constant('ROLE',{
  superadmin : 1,
       admin : 2,
     profesor: 3,
     asistent: 4,
     student : 5


})

.constant('FORM_ERROR',{
  requiredMessage : 'Ovo polje je obavezno',

  invalidFacultyname : "Naziv Fakulteta može sadržavati slova i brojeve",
  invalidFacultyminlength : "Naziv fakulteta mora sadžavati bar dva znaka",
  invalidFacultymaxlength : "Naziv fakulteta ne može biti preko 40 znakova",

  invalidCity : "Naziv grada može sadržavati slova i brojeve",
  invalidCityminlength: "Naziv grada mora sadžavati bar dva znaka",
  invalidCitymaxlength: "Naziv grada ne može biti preko 30 znakova",

  invalidAddress : "Adresa može sadržavati slova brojeve i _",
  invalidAddressminlength : "Adresa mora sadžavati bar dva znaka",
  invalidAddressmaxlength : "Adresa ne može biti preko 40 znakova",

  invalidPhone : "Telefon može sadržavati samo brojeve",
  invalidPhoneminlength : "Telefon mora imati barem 6 brojeva",
  invalidPhonemaxlength : "Telefon ne može imati više od 20 brojeva"
});
