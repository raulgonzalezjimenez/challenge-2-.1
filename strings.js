// Todas las funciones y export

// length: Devuelve la longitud del string.

export const obtenerLongitud = (cadena) => {
  let longitud = 0;
  while (cadena[longitud] !== undefined) {
    longitud++;
  }

  return longitud;
};

// Subsstring

export const substring = (str, start, end) => {
  let newString = '';
  const strElements = obtenerLongitud(str);
  for (let i = start; i < end && i < strElements; i++) {
    newString += str[i];
  }

  return newString;
};

// Includes
export const include = (x, y) => {
  if (obtenerLongitud(x) === obtenerLongitud(y)) {
    return true;
  }

  return false;
};

console.log(include('hola mundo', 'hola mundo'));
