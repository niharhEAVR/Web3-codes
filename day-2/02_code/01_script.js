{
    const bytes = [256, 244, 1, 23]
    console.log(bytes);
}

{
    let bytes = new Uint8Array([0, 255, 127, 128]);
    console.log(bytes)
    // 0 = 00000000
    // 255 = 11111111
    // 127 =  01111111
    // 128 = 10000000
    // this is a 4 byte program, means one value of this array represents one byte
}

{
    let bytes = new Uint8Array([0, 256, 127, 128]);
    console.log(bytes)
    // this because the bytes can only be 8 bits
    // after 255 the padding will start from again 0 to 255
}

{
    let uint8Arr = new Uint8Array([0, 255, 127, 128]);
    uint8Arr[1] = 300;
    console.log(uint8Arr)
}
// In normal array we can store more than 255 in one byte thats why Uint8Array is the better way to represent the bytes in javascript.

// read 02_notes.md