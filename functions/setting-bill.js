var settingBill = function(){
    var theCallCost = 0;
    var theSmscost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var costCallTotal = 0;
    var costSmsTotal = 0;

    

     var setCallCost = function(callCost){
         theCallCost = callCost;

    }

    var getCallCost = function(){
        return theCallCost;
    }
    var setSmsCost = function(smsCost){
        theSmscost = smsCost;
    }
    var getSmsCost = function(){
        return theSmscost;
    }

    var setWarningLevel = function(warningLevel){
        theWarningLevel = warningLevel;
    }
    var getWarningLevel = function(){
        return theWarningLevel;
    }
    var setCriticalLevel = function(CriticalLevel){
        theCriticalLevel = CriticalLevel;
    }
    var getCritialLevel = function(){
        return theCriticalLevel;
    }
    var  makeCall = function(){
        costCallTotal += theCallCost
    }
    var getTatolCost = function(){
        return costCallTotal + costSmsTotal;
    }
    var getTatolCallCost = function(){
        return costCallTotal;
    }
    var getTatolSmsCost = function(){
        return costSmsTotal;

    }
    var sendSms = function(){
        costSmsTotal += theSmscost;
    }
    

    return{
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCritialLevel,
        makeCall,
        getTatolCost,
        getTatolCallCost,
        getTatolSmsCost,
        sendSms
    }
}