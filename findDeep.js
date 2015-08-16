var testArray = [
  {id: 1, children: [
    {id: 2, children: undefined},
    {id: 3, children: undefined}
  ]},
  {id: 4, children: undefined}
];

var findDeep = function(key, val) {
  for ( var i in this ) {
    if ( this.hasOwnProperty(i) ) {
        if ( this[i][key] == val )
          return this[i];
        if ( this[i].children )
          return findDeep.call(this[i].children, key, val);
    }
  }
  return false;
};

testArray.find = findDeep;

console.log( testArray.find('id', 3) );
