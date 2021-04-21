describe('settingbill function', function(){
    it('should be able to set the call cost', function(){
        let billSetting = settingBill();
        billSetting.setCallCost(1.85);
        assert.equal(1.85, billSetting.getCallCost());

        let billSettingCall = settingBill();
        billSettingCall.setCallCost(2.80);
        assert.equal(2.80, billSettingCall.getCallCost());
        
    })
    it('should be able to set the Sms cost', function(){
        let billSetting = settingBill();
        billSetting.setSmsCost(0.85)
        assert.equal(0.85, billSetting.getSmsCost());

        let billSettingSms = settingBill();
        billSettingSms.setSmsCost(0.95);
        assert.equal(0.95, billSettingSms.getSmsCost());
    })

    it('should be able to set the call and Sms cost', function(){
        let billSetting = settingBill();
        
        billSetting.setCallCost(1.85);
        billSetting.setSmsCost(0.95)
        assert.equal(1.85, billSetting.getCallCost());
        assert.equal(0.95, billSetting.getSmsCost());
    })
    it('should be able to set the warning level cost', function(){
        let billSetting = settingBill();
        
        billSetting.setWarningLevel(20);
        assert.equal(20, billSetting.getWarningLevel());
        
    })

    it('should be able to set the Critical level cost', function(){
        let billSetting = settingBill();
        
        billSetting.setCriticalLevel(45);
        assert.equal(45, billSetting.getCritialLevel());
        
    })
    describe('set values function', function(){
        it('should be able to use the call cost set', function(){
            
            let billSetting = settingBill();
            
            billSetting.setCallCost(2.25);
            billSetting.setSmsCost(0.85);
    
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
    
            assert.equal(6.75, billSetting.getTatolCost());
            assert.equal(6.75, billSetting.getTatolCallCost());
            assert.equal(0.00, billSetting.getTatolSmsCost())
        });
        
        it('should be able to use the call cost set for 2 calls at 1.35 each', function(){
            
            let billSetting = settingBill();
            
            billSetting.setCallCost(1.25);
            billSetting.setSmsCost(0.85);
    
            billSetting.makeCall();
            billSetting.makeCall();
    
            assert.equal(2.50, billSetting.getTatolCost());
            assert.equal(2.50, billSetting.getTatolCallCost());
            assert.equal(0.00, billSetting.getTatolSmsCost())
        });
        it('should be able to send 2 sms at 0.85 each', function(){
            
            let billSetting = settingBill();
            
            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.85);
    
            billSetting.sendSms();
            billSetting.sendSms();
    
            assert.equal(1.70, billSetting.getTatolCost());
            assert.equal(0.00, billSetting.getTatolCallCost());
            assert.equal(1.70, billSetting.getTatolSmsCost());
        });
        it('should be able to send 2 sms at 0.85 each and 1 call at 1.00', function(){
            
            let billSetting = settingBill();
            
            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.85);
    
            billSetting.sendSms();
            billSetting.makeCall();
            billSetting.sendSms();
    
            assert.equal(3.05, billSetting.getTatolCost());
            assert.equal(1.35, billSetting.getTatolCallCost());
            assert.equal(1.70, billSetting.getTatolSmsCost());
        });
    });
    
});

