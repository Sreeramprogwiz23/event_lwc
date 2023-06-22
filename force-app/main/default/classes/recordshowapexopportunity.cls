public with sharing class recordshowapexopportunity {
    @AuraEnabled(cacheable=true)
    public static List<opportunity> getRelatedOpportuity(id accountId) {
        return [SELECT Id, Amount, Closedate, Description FROM opportunity WHERE AccountId = :accountId];
    }
}