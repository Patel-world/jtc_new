//setting readlines for input

import * as readline from 'readline';

class Alarm {
    time: Date;
    days: string[];
  
    constructor(time: Date, days: string[]) {
        this.time = time;
        this.days = days;
}
}

interface data {
    time: Date;
    days: string[];
   
}

//setting readlines interface for input
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//function to take input
function question(theQuestion): Promise<string> {
    return new Promise((resolve) =>
        rl.question(theQuestion, (answer) => resolve(answer))
    );
}


//function to snooze
//with 5 minute timer
function snooze() {
    var count: number = 0
    const interval = setInterval(async () => {
        count = count + 1;
        console.log('alarm time')
        var a = await question("Enter 1 to cancel ")
        if (a === '1' || count == 3) {
            clearInterval(interval)

        }
    }, 300000)

}


//function to observe can be only implemented parallely using multithread 
//this is in working tested with accurate response 
//can be implement by uncommenting
async function alarmObserver(p1) {
    const thisInterval = setInterval(() => {
        var alarm = new Date(p1.time)
        var now = new Date()
        console.log(alarm <= now, alarm, now)
        if (alarm <= now) {
            console.log('alarm time')
            snooze()
            clearInterval(thisInterval)

        }
    }, 1000)

}

async function alarmy(z: string):Promise<void> {

    //to add 
    if (z == '1') {
        var n: string = await question("Enter the alarm time, e.g. 5 or 18 or 18:30 ")
        console.table({ '#': 'Once', '*': 'daily', '1': 'sunday', '2': 'monday', '3': 'tuesday', '4': 'wednesday', '5': 'thursday', '6': 'friday', '7': 'saturday' })
        var p: string = await question("Enter the repeat days, e.g. 1 2 3 or * or #")
        var days: string[] = p.split(' ')
        var time = new Date().toString().split(' ')
        //time[4]=n.split(' ')[1]=='pm'?String(Number(n.split(' ')[0])+12)+':':n.split(' ')[0]+':'
        time[4] = n + ':'

        const t = new Date(time.join(' ')).toString()
        console.log(time.join(' '))
        var p1: data = new Alarm(new Date(time.join(' ')), days)
        alarms.push(p1)
        console.log(p1.time)
        
        //alarmObserver(p1)

    }

    //to delete
    if (z == '2') {
        console.table(alarms)
        var d = await question("Enter the index value to delete: ")
        alarms = alarms.filter(e => alarms.indexOf(e) != Number(d))
        console.log('deleted...')
        console.table(alarms)

    }
    //to view
    if (z == '3') {
        console.table(alarms)
    }
    //we can call this to activate alarm
    //alarmObserver(p1)
    main()
}

var alarms: data[] = []

//main to initiate
async function main():Promise<void> {
    console.table({ '1': 'add alarm', '2': 'delete alarm', '3': 'view alarms' })
    var i = await question("Enter the code: ")
    alarmy(i)
}

main()
