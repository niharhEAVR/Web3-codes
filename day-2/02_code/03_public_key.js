{
  console.log("\n\*Decimal Representation of a character\*")
  let str = "h";
  const decimalRepresentation = new TextEncoder().encode(str);
  console.log(decimalRepresentation)
}
{
  // encode 
  console.log("\n\*Decimal Array Representation of a public key\*")
  let publicKey = "HJGUIYvbuGUUGhgiuGOUGubiugUGUOGuigiuoQIHIHHIHhhihDOIPWhg";
  const decimalRepresentation = new TextEncoder().encode(publicKey);
  console.log(decimalRepresentation)
}
{
  // decode 
  console.log("\n\*public key Representation of a Decimal Array\*")
  let publicKey = new Uint8Array([
    72, 74, 71, 85, 73, 89, 118, 98, 117, 71, 85,
    85, 71, 104, 103, 105, 117, 71, 79, 85, 71, 117,
    98, 105, 117, 103, 85, 71, 85, 79, 71, 117, 105,
    103, 105, 117, 111, 81, 73, 72, 73, 72, 72, 73,
    72, 104, 104, 105, 104, 68, 79, 73, 80, 87, 104,
    103
  ])
  const binaryRepresentation = new TextDecoder().decode(publicKey);
  console.log(binaryRepresentation)
}
