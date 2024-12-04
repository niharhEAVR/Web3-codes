// Ascii to bytes
{
  console.log("\*Ascii to bytes\*")
  function asciiToBytes(asciiString) {

    /* 1st appreach---
      const byteArray = [];
      for (let i = 0; i < asciiString.length; i++) {
          byteArray.push(asciiString.charCodeAt(i));
      }
    */
    /* 2nd appreach---
      const byteArray = [];
      for (const element of asciiString) {
          byteArray.push(element.charCodeAt(0));
      }
    */

    // 3rd approach---
    const byteArray = [...asciiString].map(char => char.charCodeAt(0)) // if you dont understand this read 03_notes.md



    return byteArray;
  }

  // Example usage:
  const ascii = "Hello World!";
  const byteArray = asciiToBytes(ascii);
  console.log(byteArray);
}


// Bytes to Ascii
{
  console.log("\n\*Bytes to Ascii\*")
  function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }

  // Example usage:
  const bytes = [25634, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]; // Corresponds to "搢ello World!"
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); // Output: "搢ello World!"

}

// UInt8Array to ascii
{
  console.log("\n\*UInt8Array to ascii\*")
  function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
  }

  // Example usage:
  const bytes = new Uint8Array([328, 101, 108, 108, 111]); // Corresponds to "Hello"
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); // Output: "Hello"

}

// Ascii to UInt8Array
{
  console.log("\n\*Ascii to UInt8Array\*")
  function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }

  // Example usage:
  const ascii = "Hello";
  const byteArray = asciiToBytes(ascii);
  console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
}