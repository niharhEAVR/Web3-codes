// read 04_bits_&_bytes.md to get better understand.
// read 05_hex_string.md

{
  let num = 12;
  let a = num.toString(2);
  let a1 = num.toString(16);
  let a2 = num.toString(8);
  console.log("Binary represenatation of the number 12: ", a)
  console.log("Hexadecimal represenatation of the number 12: ", a1)
  console.log("Octal represenatation of the number 12: ", a2, "\n")
  
  //padStart() function explanation
  let a4 = num.toString(16).padStart(2, "0");
  let a5 = num.toString().padStart(5, "0");
  console.log(a4)
  console.log(a5, "\n")// padstart means that put 0 in front, so that net-length of that number becomes 5.
}


// Array to hex
{
  function arrayToHex(byteArray) {
    let hexString = '';
    // for (let i = 0; i < byteArray.length; i++) {
    //   //[72, 101, 108, 108, 111]
    //   hexString += byteArray[i].toString(16);
    //   // the toString(16) shows the hexadecimal encoding
    // }

    for (const element of byteArray) {
      hexString += element.toString(16);
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
    console.log(byteArray);

    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
      console.log(byteArray);
    }

    return byteArray;
  }

  // Example usage:
  const hex = "48656c6c6f";
  const byteArrayFromHex = hexToArray(hex);
  const originalText = new TextDecoder().decode(byteArrayFromHex)
  console.log(originalText); // Output: Hello

}

// we not really going to use this conversions but for learning we have to know these