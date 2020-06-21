const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    PLACE: Symbol("place"),
    DATE: Symbol("date"),
    FLIGHT:  Symbol("flight"),
    OPTIONS: Symbol("options"),
    DAY_FLIGHT: Symbol("day"),
    NIGHT_FLIGHT: Symbol("night"),
    ACCESSORY: Symbol("accessory"),
    HOTEL: Symbol("hotel"),
    EMAIL: Symbol("email"),
    END: Symbol("end")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Hi, Where are you planning to go. I have some great holiday spots: England, France, Japan, India?";
                this.stateCur = GameState.PLACE;
                break;
            case GameState.PLACE: 
                if(sInput.toLowerCase().match("england")){    
                    sReply ="Great choice! England is pure magic. \n England has everything: from history and culture to fine food and exceedingly good times.";                    
                    this.stateCur=GameState.DATE;  
                }
                else if(sInput.toLowerCase().match("france")){
                    sReply ="That's wonderful! France is without a doubt one of the most beautiful country in the world."; 
                    this.stateCur=GameState.DATE;  
                }
                else if(sInput.toLowerCase().match("japan")){
                    sReply ="Japan is awesome! I am sure you will be enjoying your tour."; 
                    this.stateCur=GameState.DATE;  
                }
                else if(sInput.toLowerCase().match("india")){
                    sReply ="India is a famous place for tourism and is famous for a different type of tourist spots like Nature places, Architecture and Culture, Honeymoon spots, Adventure acts, Shopping, and Historical places of India";                     
                    this.stateCur=GameState.DATE;  
                }
                else{
                    sReply ="Sorry I didn't get that! You can again try from the these famous spots: England, France, Japan, India?";                    
                    this.stateCur = GameState.PLACE;      
                }       
                break;
            case GameState.DATE:                                           
                sReply="Tell me do you have any dates in mind?";
                this.stateCur = GameState.FLIGHT;                
                break;    
            case GameState.FLIGHT:
                if(sInput.toLowerCase().match("yes") || sInput.toLowerCase().match("sure")){
                    sReply="Awesome, would you prefer a day flight or an evening flight?";
                    this.stateCur = GameState.OPTIONS;      
                }  
                else{
                    sReply="I'm still learning and I have got limited options so far. You can try again";
                    this.stateCur = GameState.WELCOMING; 
                }        
                break; 
            case GameState.OPTIONS:
                if(sInput.toLowerCase().match("day")){
                    sReply = "Perfect, I have 4 options that are direct flights. Would you prefer to see the lowest flight first?";
                    this.stateCur = GameState.DAY_FLIGHT;
                }else if(sInput.toLowerCase().match("evening")){
                    sReply = "Perfect, I have 2 options that are direct flights. Would you prefer to see the lowest flight first?";
                    this.stateCur = GameState.NIGHT_FLIGHT;
                }else{
                    sReply = "Sorry I didn't get that. Can you try again : a day flight or an evening flight?";
                    this.stateCur = GameState.OPTIONS;
                }
                break;
            case GameState.DAY_FLIGHT:
                if(sInput.toLowerCase().match("yes") || sInput.toLowerCase().match("sure") || sInput.toLowerCase().match("ok")){
                    sReply = "Here they are: \n XYZ Flight 320 CAD/- Departs 5:45 pm-Arrive next day 2:30 am \n XYZ Flight 345 CAD/- Departs 3:45 pm-Arrive next day 12:30 am \n XYZ Flight 390 CAD/- Departs 4:15 pm-Arrive next day 1:15 am \n XYZ Flight 435 CAD/- Departs 4:30 pm-Arrive next day 1:30 am \n Do you like any of the above choices?";                                      
                    this.stateCur = GameState.ACCESSORY;    
                }else if(sInput.toLowerCase().match("no")){
                    sReply = "I understand that you would like to see highest first. \n Here they are: XYZ Flight 435 CAD/- Departs 4:30 pm-Arrive next day 1:30 am \n XYZ Flight 390 CAD/- Departs 4:15 pm-Arrive next day 1:15 am \n XYZ Flight 345 CAD/- Departs 3:45 pm-Arrive next day 12:30 am \n XYZ Flight 320 CAD/- Departs 5:45 pm-Arrive next day 2:30 am \n Do you like any of the above choices?";                   
                    this.stateCur = GameState.ACCESSORY;
                }else{
                    sReply = "Sorry I didn't get that. Can you try again?";
                    this.stateCur = GameState.OPTIONS;
                }
                break;
            case GameState.NIGHT_FLIGHT:
                if(sInput.toLowerCase().match("yes") || sInput.toLowerCase().match("sure") || sInput.toLowerCase().match("ok")){
                    sReply = "Here they are: XYZ Flight 310 CAD/- Departs 11:45 pm-Arrive next day 9:30 am \n XYZ Flight 335 CAD/- Departs 10:45 pm-Arrive next day 8:30 am \n XYZ Flight 380 CAD/- Departs 9:15 pm-Arrive next day 7:15 am \n XYZ Flight 455 CAD/- Departs 10:30 pm-Arrive next day 7:30 am \n Do you like any of the above choices?";                                     
                    this.stateCur = GameState.ACCESSORY;    
                }else if(sInput.toLowerCase().match("no")){
                    sReply = "I understand that you would like to see highest first. Here they are: \n XYZ Flight 455 CAD/- Departs 10:30 pm-Arrive next day 7:30 am \n XYZ Flight 380 CAD/- Departs 9:15 pm-Arrive next day 7:15 am \n XYZ Flight 335 CAD/- Departs 10:45 pm-Arrive next day 8:30 am \n Here they are: XYZ Flight 310 CAD/- Departs 11:45 pm-Arrive next day 9:30 am \n Do you like any of the above choices?";                 
                    this.stateCur = GameState.ACCESSORY;
                }else{
                    sReply = "Sorry I didn't get that. Can you try again?";
                    this.stateCur = GameState.OPTIONS;
                }
                break;  
            case GameState.ACCESSORY:
                if(sInput.toLowerCase().match("yes") || sInput.toLowerCase().match("sure")){
                    sReply = "Nice — would you like to book a hotel for your stay?";
                    this.stateCur = GameState.HOTEL;
                }else if(sInput.toLowerCase().match("no")){
                    sReply = "Would you like to take a look again?";
                    this.stateCur = GameState.FLIGHT;    
                }else{
                    sReply = "Sorry I didn't get that. Can you try again?";
                    this.stateCur = GameState.ACCESSORY;                
                }
                break;
            case GameState.HOTEL:
                if(sInput.toLowerCase().match("yes") || sInput.toLowerCase().match("sure")){
                    sReply = "Okay, I have some great options for you- Mandarin Oriental, Four Seasons Hotel, Radisson Hotel, Knights inn \n Would you like to book any of these?";           
                    this.stateCur = GameState.EMAIL;
                }else if(sInput.toLowerCase().match("no")){
                    this.stateCur = GameState.EMAIL;
                }
                else{
                    sReply = "Sorry I didn't get that. Can you try again?";
                    this.stateCur = GameState.HOTEL;
                }
                break;
            case GameState.EMAIL:
                    sReply = "Great! I will send the invoice to your email address after which you can get the confirmation of your tickets. Please provide your email address?";
                    this.stateCur = GameState.END;     
                break;                        
            case GameState.END:
                sReply = "We are all set, I am building the package now and expect an email in less than a minute with all the information and confirmations. Have a great trip and do come back if I can help with any changes or more information.";
                this.stateCur = GameState.WELCOMING;  
                break;            
            }        
        return([sReply]);
    }
}
