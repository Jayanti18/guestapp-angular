class Guest {
    _id:string;
    name: string;
    email: string;
    roomSize: string;
    roomNum: number;
    checkInDate: Date;
    checkOutDate: Date;
    payment: string;
    // numNight:number;
    // date: Date;
    status: string;

    constructor(){
        this.name = ""
        this.email = ""
        this.roomSize = ""
        this.roomNum = 0
        this.checkInDate = new Date()
        this.checkOutDate = new Date()
        this.payment = ""
        // this.numNight = 0
        // this.date = new Date()
        this.status = ""
    }
}

export default Guest;