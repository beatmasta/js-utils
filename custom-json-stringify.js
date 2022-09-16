// JSON.stringify() js Map()

const m = new Map();

m.set('key1', {data: 1});
m.set('key2', {data: 1});
m.set('key3', {data: 1});
m.set('key4', {data: 1});
m.set('key5', {data: 1});

const mapString = JSON.stringify(m, (key, value) => {

  if (value instanceof Map) {
  
    return [...value].reduce((acc, curr) => {
      
      acc[curr[0]] = curr[1];
    
      return acc;

    }, {});

  } else {
  
    return value;
  
  }
  
});

console.log(mapString);
