function addTwo(num: number): number {
    return num + 2;
}

function getUpperCase(val: string){
   return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

let loginUser = (email: string, isPaid: boolean = false /*default value*/) => {}

addTwo(5);

getUpperCase("vikrant");

signUpUser("vikrant", "vik@gmail.com" , false);

loginUser("h@gmail.com", true);

const getHello  = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero: string): string => {
    return `hero is ${hero}`;
    // return 1;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    // return 1;
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { }