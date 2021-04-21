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

});
