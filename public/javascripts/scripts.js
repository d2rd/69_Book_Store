(function () {
  var content = document.getElementById('content')
  var html = ''
  var data = {
    title: 'Really cool people',
    people: [
      {
        name: 'John',
        age: 34,
        email: 'john@gmail.com'
      },
      {
        name: 'Sally',
        age: 22,
        email: 'sally12@gmail.com'
      },
      {
        name: 'George',
        age: 45,
        email: 'george@hotmail.com'
      }
    ]
  }
})

html += '<h1>' data.title + '</h1>';
html += '<ul class="people">';