let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(element, list) {
    return list.indexOf(element) >= 0;
  }

  console.log(contains('Barcelona', destinations)); // true
  console.log(contains('Nashville', destinations)); // false