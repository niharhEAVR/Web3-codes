// Encode
{
    const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
    const base64Encoded = Buffer.from(uint8Array).toString("base64");
    console.log(base64Encoded);
}


// Decode
{
    const base64Encoded = "SGVsbG8="
    // Decode Base64 to Buffer
    const uint8Array = Buffer.from(base64Encoded,"base64")
    // Pinting that Uint8Array
    const array = new Uint8Array(uint8Array)
    console.log(array);
    // Convert that Array to string (if needed)
    const decodedString = new TextDecoder().decode(uint8Array);
    console.log(decodedString);
}
