public with sharing class recordshowapexclass {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(id accountId) {
        return [SELECT Id, FirstName, LastName, Email FROM Contact WHERE AccountId = :accountId];
    }
}
