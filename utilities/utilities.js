function getinputbyid(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value)
    return convertedValue;
}