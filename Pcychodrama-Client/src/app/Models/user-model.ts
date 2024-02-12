export default interface userModel{
    id: number,
    tz : string,
    fullName: string, 
    password : string,
    email : string,
    phone : string,
    class : string | undefined
    age : number,
    techerName : string |undefined,
    signedForm : string
}