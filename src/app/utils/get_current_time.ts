





export const Get_Current_Date = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    console.log(`${day}-${month}-${year}`)
    return `${day}-${month}-${year}`;
}
