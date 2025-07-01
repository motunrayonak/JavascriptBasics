// mon - 5am
// tue-thur - 6am
// fri - 7am
//sat-sun - 8am

let day ="holiday"
switch (day) {
    case 'monday':
     console.log ("5am");
     break;

    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log("6am");
        break;

    case 'friday':
        console.log("7am");
        break;

    case 'saturday':
    case 'sunday':
        console.log("8am");
        break;
        default:
            console.log("7am - practice programming");
}
