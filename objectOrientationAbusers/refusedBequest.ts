class Tax {  
    CalculateBaseTax(): number
    {  
        return 0;
    }  
  
    AddTax(tax: number): number {  
        return 0
    }  
  
    GetTaxAmount(): number {  
        const tax: number = this.CalculateBaseTax();  
        var taxAmount =  this.AddTax(tax);  
        return taxAmount;  
    }  
}  

class Person extends Tax{
    CalculateTax(): number{
        return 1;
    }

    override GetTaxAmount(): number {
        const tax: number = this.CalculateTax();
        var taxAmount =  this.AddTax(tax); 
        return taxAmount;
    }
}