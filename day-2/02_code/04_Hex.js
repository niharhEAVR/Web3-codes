//padStart() function explanation
{
  let a = 12;
  let b = a.toString(16).padStart(2,"0");
  let b2 = a.toString(16).padStart(5,"0");
  let b3 = a.toString().padStart(5,"0");
  console.log(b)
  console.log(b2)
  console.log(b3)
  // the out put is showing 0c => c=12 in hexadecimal and 0 is showing fo the padStart
}


// Array to hex
{
    function arrayToHex(byteArray) {
        let hexString = '';
        for (let i = 0; i < byteArray.length; i++) {
          //[h, e, l, l, o] 
          hexString += byteArray[i].toString(16).padStart(2, '0');
          // the toString(16) shows the hexadecimal encoding
        }
        return hexString;
      }
      
      // Example usage:
      const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
      const hexString = arrayToHex(byteArray);
      console.log(hexString); // Output: "48656c6c6f"
      
}

// Hex to array
{
    function hexToArray(hexString) {
        const byteArray = new Uint8Array(hexString.length / 2);
        for (let i = 0; i < byteArray.length; i++) {
          byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
        }
        return byteArray;
      }
      
      // Example usage:
      const hex = "48656c6c6f";
      const byteArrayFromHex = hexToArray(hex);
      console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
      
}

// we not really going to use this conversions but for learning we have to know these