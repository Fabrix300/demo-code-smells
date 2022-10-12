class User {
    contactInfo: ContactInfo;

    getFullAddress(): string {
        return this.contactInfo.address + "" + this.contactInfo.city;
    }
}

class ContactInfo {
    address: string;
    city: string;
}