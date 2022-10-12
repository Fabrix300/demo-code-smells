function A () {
    const a = Date.now();
    let b: string;
    if (a === Date.now()){
        b = "Sí";
    } 
    else {
        b = "No";
    }
}

function B () {
    const b = Date.now();
    let a: string;
    if (b === Date.now()){
        a = "Sí";
    } 
    else {
        a = "No";
    }
}